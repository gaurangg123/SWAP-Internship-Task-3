import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss']
})
export class BusinessComponent implements OnInit {
  public allProduct: any[] = [];
  public apiHost:any;
  public main_title: any[] = [];
  public main_image: any[] = [];
  public logo_image: any[] = [];
  public video: any[] = [];
  public link: any[] = [];
  public logotitle: any[] = [];
  public name:any[]=[];
  public logo_link:any[]=[];
  public add_category: any[]=[];

  constructor(
    private apiServices: ApiService,
  ) { 
  this.apiHost = environment.API_HOST;
  }

  ngOnInit(): void {
    this.allProductData()
  }
  async allProductData() {
    await this.apiServices.getAllProduct().subscribe((resp: any) => {
      this.allProduct = resp.data;
      this.allProduct.forEach((elem) => {
        if(elem.name=='External Product'){
          this.logo_image.push(`${this.apiHost}${elem.logo_image[0].src}`)
        } else {
          this.logo_image.push('')
        }
        this.main_image.push(`${this.apiHost}${elem.news_image[0].src}`)
        this.main_title.push(`${elem.title}`)
        this.logotitle.push(`${elem.logo_title}`)
        this.link.push(`${elem.link}`)
        this.logo_link.push(`${elem.logo_link}`)
        this.name.push(`${elem.name}`)
        this.add_category.push(`${elem.sub_category_name}`)
        this.add_category=Array.from(new Set(this.add_category));
      })
      console.log(this.allProduct,"business");
    });
  }

}
