import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-category-internal-page',
  templateUrl: './category-internal-page.component.html',
  styleUrls: ['./category-internal-page.component.scss']
})
export class CategoryInternalPageComponent implements OnInit {
  private _cat: any;
  private _subcat: any;
  public allData: any;
  private _allDataAsGloble: any;
  public allSubcat: any[] = [];
  // private _subCatName: any;
  public addActiveClass: string = '';
  public searchText: string = '';
  public query: any;
  private userData: any = JSON.parse(localStorage.getItem('userInfo') || '{}');
  //public membershipFlag: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService,
    private ngxSpinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.ngxSpinnerService.show();
    this.route.params.subscribe(params => {
      this._cat = params['cat'];
      this._subcat = params['subcat'];
      if(this._cat === "Regulatory") {
        //this.checkUserMembership();
      } else {
        //this.membershipFlag = true;
      }
      this.getCategoryContent();
      this.addActiveClass = '';
      console.log(this._cat);
    });
  }

  // checkUserMembership() {
  //   if(this.userData.id) {
  //     // console.log(this.userData.id);
  //     let getId = {
  //       user_id: this.userData.id
  //     };
  //     this.apiService.checkAlreadyUserMembership(JSON.stringify(getId)).subscribe((res: any) => {
  //       if(res.success) {
  //         console.log(res.message);
  //         this.membershipFlag = res.flag;
  //       } else {
  //         console.log(res.message);
  //         this.membershipFlag = res.flag;
  //       }
  //     });
  //   }
  // }

  async getCategoryContent() {
    let getDataByCategory;
    let getSubCatNames;
    if(this._cat === 'NEWS') {
      getDataByCategory = this.apiService.getAllNews();
      getSubCatNames = this.apiService.getAllSubCatNewsList();
    } else if (this._cat === 'Regulatory'){
      getDataByCategory = this.apiService.getAllGuidelines();
      getSubCatNames = this.apiService.getAllSubCatGuidelinesList();
    }else if(this._cat === 'gmp') {
      getDataByCategory = this.apiService.getAllGmp();
      getSubCatNames = this.apiService.getAllSubCatGmpList();
    }else if(this._cat === 'Business') {
      getDataByCategory = this.apiService.getAllBusiness();
      getSubCatNames = this.apiService.getAllSubCatBusinessList();
    }else if(this._cat === 'product') {
      getDataByCategory = this.apiService.getAllProduct();
      getSubCatNames = this.apiService.getAllSubCatProductList();
    }else if(this._cat === 'videos') {
      getDataByCategory = this.apiService.getAllVideos();
      getSubCatNames = this.apiService.getAllSubCatVideoList();
    }
    await getDataByCategory?.subscribe((resp: any) => {
      console.log(resp.data);
      this.allData = resp.data;
      this._allDataAsGloble = resp.data;
      if(this._subcat !== 'all') {
        this.getBySubcat(this._subcat);
        this.addActiveClass = this._subcat;
      }
      this.ngxSpinnerService.hide();
    });

    await getSubCatNames?.subscribe((resp: any) => {
      const { data } = resp;
      let allActiveSubCat = [];
      for(let i = 0; i < data.length; i++) {
        if(data[i].status === "active") {
          allActiveSubCat.push(data[i].sub_category_name);
        }
      }
      // console.log(allActiveSubCat)
      this.allSubcat = allActiveSubCat;
    });
  }

  getSearchResults() {
    if(this.searchText !== '') {
      this.ngxSpinnerService.show();
      let dataDetails = {
        title: this.searchText,
        category_name: this._cat,
        // category_name: 'Regulatory',
        sub_category_name: this.addActiveClass !== 'reset' ? this.addActiveClass : ''
      }
      console.log(dataDetails)
      this.apiService.internalSearchData(dataDetails)?.subscribe((resp: any) => {
        console.log(resp.data);
        this.allData = resp.data;
        this.ngxSpinnerService.hide();
      });
    } else {
      if(this.addActiveClass !== '') {
        this.getBySubcat(this.addActiveClass)
      } else {
        this.allData = this._allDataAsGloble;    
      }
    }
  }

  getBySubcat(subcatName: string) {
    if(subcatName === 'reset') {
      this.addActiveClass = 'reset';
      this.allData = this._allDataAsGloble;
    } else {
      let getData = [];
      for(let i = 0; i < this._allDataAsGloble.length; i++) {
        if(this._allDataAsGloble[i].sub_category_name.includes(subcatName)) {
          getData.push(this._allDataAsGloble[i]);
        }
      }
      this.addActiveClass = subcatName;
      this.allData = getData;
    }
  }

}
