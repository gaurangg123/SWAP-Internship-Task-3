import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { DomSanitizer } from "@angular/platform-browser"; 
// import { ImageData, DisplayConfig, SameSizeConfig, ImageEffect } from '@creativeacer/ngx-image-display';

@Component({
  selector: 'app-individual-internal-page',
  templateUrl: './individual-internal-page.component.html',
  styleUrls: ['./individual-internal-page.component.scss']
})
export class IndividualInternalPageComponent implements OnInit {
  private _getId: any;
  private _getType: any;
  public allData: any = [];
  public allCatData: any;
  public allSubcat: any;
  delayedLoad: any;
  iframre: boolean = false;
  Url: any;
  public iconList = [
    { type: "xlsx", icon: "fa fa-file-excel-o green-excel" },
    { type: "xls", icon: "fa fa-file-excel-o green-excel" },
    { type: "pdf", icon: "fa fa-file-pdf-o red-pdf" },
    { type: "doc", icon: "fa fa-file-word-o blue-word" },
    { type: "docx", icon: "fa fa-file-word-o blue-word" },
    { type: "ppt", icon: "fa fa-file-powerpoint-o orange-ppt" },
    { type: "pptx", icon: "fa fa-file-powerpoint-o orange-ppt" },
    { type: "txt", icon: "fa fa-file-text"}
  ];

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private ngxSpinnerService: NgxSpinnerService,
    private sanitizer: DomSanitizer
  ) 
    { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._getId = params['getId'];
      this._getType = params['getType'];
      this.getAllDataById();
      this.getCategoryContent();
    });
   
  }

  async getAllDataById() {
    this.ngxSpinnerService.show();
    let getDataById;
    const IdObj = {id : this._getId};
    console.log(this._getType,"grttrtgrtr");
    if(this._getType === 'News'|| this._getType === 'NEWS') {
      getDataById = this.apiService.newsById(IdObj);
    } else if(this._getType === 'Regulatory') {
      getDataById = this.apiService.guidelinesById(IdObj);
    }else if(this._getType === 'GMP') {
      getDataById = this.apiService.gmpById(IdObj);
    }else if(this._getType === 'Business') {
      getDataById = this.apiService.businessById(IdObj);
    }else if(this._getType === 'Product') {
      getDataById = this.apiService.productById(IdObj);
    }else if(this._getType === 'Videos') {
      getDataById = this.apiService.videoById(IdObj);
    }
    await getDataById?.subscribe((resp: any) => {
      this.allData = resp.getData;
      this.iframre = true;
      this.ngxSpinnerService.hide();
      console.log(this.allData);
      console.log(this.allData.pdfurl,'PDF',this.allData);

      this.Url = this.sanitizer.bypassSecurityTrustResourceUrl(this.allData.pdfurl);
      console.log(this.Url,'urllll');    
    });
  }
   
  

  async getCategoryContent() {
    let getDataByCategory;
    let getSubCatNames;
    if(this._getType === 'News') {
      getDataByCategory = this.apiService.getAllNews();
      getSubCatNames = this.apiService.getAllSubCatNewsList();
    } else if(this._getType === 'Regulatory') {
      getDataByCategory = this.apiService.getAllGuidelines();
      getSubCatNames = this.apiService.getAllSubCatGuidelinesList();
    }else if(this._getType === 'GMP') {
      getDataByCategory = this.apiService.getAllGmp();
      getSubCatNames = this.apiService.getAllSubCatGmpList();
    }else if(this._getType === 'Business') {
      getDataByCategory = this.apiService.getAllBusiness();
      getSubCatNames = this.apiService.getAllSubCatBusinessList();
    }else if(this._getType === 'Product') {
      getDataByCategory = this.apiService.getAllProduct();
      getSubCatNames = this.apiService.getAllSubCatProductList();
    }else if(this._getType === 'Videos') {
      getDataByCategory = this.apiService.getAllVideos();
      getSubCatNames = this.apiService.getAllSubCatVideoList();
    }
    await getDataByCategory?.subscribe((resp: any) => {
      let catData = [];
      const { data } = resp;
      const catLength = data?.length < 5 ? data.length : 5;
      for(let i = 0; i < catLength; i++) {
        catData.push(data[i]);
      }
      this.allCatData = catData;
      console.log(catData)
    });

    await getSubCatNames?.subscribe((resp: any) => {
      const { data } = resp;
      const catLength = data?.length < 7 ? data.length : 7;
      let allActiveSubCat = [];
      for(let i = 0; i < catLength; i++) {
        if(data[i].status === "active") {
          allActiveSubCat.push(data[i].sub_category_name);
        }
      }
      this.allSubcat = allActiveSubCat;
      console.log(this.allSubcat)
    });
  }

  loadImage(imgSrc: string) {
    return this.apiService.imgUrl(imgSrc);
  }

  getFileExtension(filename: string) {
    if(filename !== undefined && filename !== null) {
      let ext = filename.split(".").pop();
      let obj = this.iconList.filter(row => {
        if (row.type === ext) {
          return true;
        } else {
          return false;
        }
      });
      if (obj.length > 0) {
        let icon = obj[0].icon;
        return icon;
      } else {
        return "";
      }
    } else {
      return "";
    }
  }

}
