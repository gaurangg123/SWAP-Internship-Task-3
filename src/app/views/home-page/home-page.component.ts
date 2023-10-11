import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from "ngx-spinner";
import { environment } from 'src/environments/environment';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public allCategoryName: any;
  public allNews: any[] = [];
  public allGmp: any[] = [];
  public allGuidelines: any[] = [];
  public allBusiness: any[] = [];
  public allProduct: any[] = [];
  public allVideos: any[] = [];

  public allNewsSubCat: any[] = [];
  public newsSubCatDD: any[] = [];
  public allGmpSubCat: any[] = [];
  public gmpSubCatDD: any[] = [];
  public allGuidelinesSubCat: any[] = [];
  public guidelinesSubCatDD: any[] = [];
  public allBusinessSubCat: any[] = [];
  public businessSubCatDD: any[] = [];
  public allProductSubCat: any[] = [];
  public productSubCatDD: any[] = [];
  public allVideoSubCat: any[] = [];
  public videoSubCatDD: any[] = [];
  // public imagesNew: Array<any> = [];
  // public logoImg: any[]=[];
  public newsImg: Array<any> = [];
  public Title: any[]=[];
  // public add_category: any[]=[];
  public name:any[]=[];
  public logo_image:any[]=[];
  public logotitle:any[]=[];
  public apiHost:any;
  public customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplaySpeed: 1500,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    // navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
  
  private userData: any = JSON.parse(localStorage.getItem('userInfo') || '{}');
  //public membershipFlag: boolean = true;
  public iconList = [
    { type: "xlsx", icon: "fa fa-file-excel-o green-excel" },
    { type: "xls", icon: "fa fa-file-excel-o green-excel" },
    { type: "pdf", icon: "fa fa-file-pdf-o red-pdf" },
    { type: "doc", icon: "fa fa-file-word-o blue-word" },
    { type: "docx", icon: "fa fa-file-word-o blue-word" },
    { type: "ppt", icon: "fa fa-file-powerpoint-o orange-ppt" },
    { type: "pptx", icon: "fa fa-file-powerpoint-o orange-ppt" },
    { type: "txt", icon: "fa fa-file-text" }
  ];

  // customOptions: OwlOptions = {
  //   loop: true,
  //   items: 4,
  //   mouseDrag: false,
  //   touchDrag: true,
  //   pullDrag: false,
  //   dots: false,
  //   navSpeed: 700,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  //   // autoplayTimeout: 2000,
  //   // autoplayHoverPause: true,
  //   // slideTransition: 'linear',
  //   // navText: [
  //   //   "<i class='fa fa-arrow-left'></i>",
  //   //   "<i class='fa fa-arrow-right'></i>"
  //   // ],
  //     navText:[
  //       ","
  //     ],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },
  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: false
  // }
  checkSubCat: any;
  checkGmpSubCat: any;
  checkGuidlineSubCat: any;

  constructor(
    private apiServices: ApiService,
    private ngxSpinnerService: NgxSpinnerService
  ) { 
  this.apiHost = environment.API_HOST;
  }

  ngOnInit(): void {
    //this.checkUserMembership();

    this.ngxSpinnerService.show();
    this.getCategoryName();
    this.allNewsData();
    this.allGmpData();
    this.allGuidelinesData();
    this.allBusinessData();
    this.allProductData();
    this.allVideosData();

    this.getSubCat();
    setTimeout(() => {
      this.ngxSpinnerService.hide();
    }, 5000);

    setTimeout(() => {
      
    }, 2000)
  }

  // checkUserMembership() {
  //   if (this.userData.id) {
  //     // console.log(this.userData.id);
  //     let getId = {
  //       user_id: this.userData.id
  //     };
  //     this.apiServices.checkAlreadyUserMembership(JSON.stringify(getId)).subscribe((res: any) => {
  //       if (res.success) {
  //         console.log(res.message);
  //         this.membershipFlag = res.flag;
  //       } else {
  //         console.log(res.message);
  //         this.membershipFlag = res.flag;
  //       }
  //     });
  //   }
  // }

  loadImage(imgSrc: string) {
    return this.apiServices.imgUrl(imgSrc);
  }

  async getCategoryName() {
    await this.apiServices.getAllCategoryNames().subscribe((resp: any) => {
      this.allCategoryName = resp;
      //console.log(this.allCategoryName,"Category Name")
    });
  }

  async allNewsData() {
    await this.apiServices.getAllNews().subscribe((resp: any) => {
      this.allNews = resp.data;
      console.log(this.allNews,"News");
      this.allNews.forEach((elem) => {
        // console.log(`${this.apiHost}${elem.advertisementLogo[0].src}`)
        // this.imagesNew.push(`${this.apiHost}${elem.logo_image[0].src}`)
        // this.logoImg.push(`${this.apiHost}${elem.news_image[0].src}`)
        if(elem.name=='External News'){
          this.logo_image.push(`${this.apiHost}${elem.logo_image[0].src}`)
        } else {
          this.logo_image.push('')
        }
        this.newsImg.push(`${this.apiHost}${elem.news_image[0].src}`)
        
        // this.add_category.push(`${elem.sub_category_name}`)
        // this.add_category=Array.from(new Set(this.add_category));
        this.Title.push(`${elem.title}`)
        this.logotitle.push(`${elem.logo_title}`)
        this.name.push(`${elem.name}`)
      })
      
      
    });
  }

  async allGmpData() {
    await this.apiServices.getAllGmp().subscribe((resp: any) => {
      this.allGmp = resp.data;
      // console.log(this.allGmp,"GMP");
    });
  }

  async allGuidelinesData() {
    await this.apiServices.getAllGuidelines().subscribe((resp: any) => {
      this.allGuidelines = resp.data;
      // console.log(this.allGuidelines,'kkkkkkkkkkkkkk');
      
      // console.log(this.allGuidelines);
    });
  }

  async allBusinessData() {
    await this.apiServices.getAllBusiness().subscribe((resp: any) => {
      this.allBusiness = resp.data;
      // console.log(this.allBusiness,"buisness");
    });
  }

  async allProductData() {
    await this.apiServices.getAllProduct().subscribe((resp: any) => {
      this.allProduct = resp.data;
      // console.log(this.allProduct,"product");
    });
  }

  async allVideosData() {
    await this.apiServices.getAllVideos().subscribe((resp: any) => {
      this.allVideos = resp.data;
      // console.log(this.allVideos,"videos");
    });
  }

  async getSubCat() {
    await this.apiServices.getAllSubCatNewsList().subscribe((resp: any) => {
      this.setSubcat(resp, this.allNewsSubCat, this.newsSubCatDD);
      // console.log(this.allNewsSubCat)
      this.checkSubCat = resp.data
      // console.log(this.checkSubCat)
    });
    await this.apiServices.getAllSubCatGmpList().subscribe((resp: any) => {
      this.setSubcat(resp, this.allGmpSubCat, this.gmpSubCatDD);
      this.checkGmpSubCat = resp.data
      // console.log(this.checkGmpSubCat, 'hello buddyyyyyyyyy')
    });
    await this.apiServices.getAllSubCatGuidelinesList().subscribe((resp: any) => {
      this.setSubcat(resp, this.allGuidelinesSubCat, this.guidelinesSubCatDD);
      this.checkGuidlineSubCat = resp.data
      // console.log(this.checkGuidlineSubCat, 'check array')
    });
    await this.apiServices.getAllSubCatBusinessList().subscribe((resp: any) => {
      this.setSubcat(resp, this.allBusinessSubCat, this.businessSubCatDD);
    });
    await this.apiServices.getAllSubCatProductList().subscribe((resp: any) => {
      this.setSubcat(resp, this.allProductSubCat, this.productSubCatDD);
    });
    await this.apiServices.getAllSubCatVideoList().subscribe((resp: any) => {
      this.setSubcat(resp, this.allVideoSubCat, this.videoSubCatDD);
    });
  }

  setSubcat(respData: any, onCat: any[], allCatDD: any[]) {
    for (let i = 0; i < 2; i++) {
      if (respData.data[i]?.status === "active" && i < 5) {
        onCat.push(respData.data[i].sub_category_name);

      }
      if (respData.data[i]?.status === "active")
        allCatDD.push(respData.data[i].sub_category_name);
    }
    // console.log(respData)
  }

  getFileExtension(filename: string) {
    if (filename !== undefined && filename !== null) {
      let ext = filename.split(".").pop();
      let obj = this.iconList.filter(row => {
        if (row.type === ext) {
          return true;
        } else {
          return false;
        }
      });
      if (obj.length > 0) {
        let type = obj[0].type;
        return type;
      } else {
        return "";
      }
    } else {
      return "";
    }
  }


}
