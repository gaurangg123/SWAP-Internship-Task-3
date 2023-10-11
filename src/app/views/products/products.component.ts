import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public allGmp: any[] = [];
  public apiHost:any;
  public main_image: any[] = [];
  public main_title: any[] = [];
  public logoTitle: any[] = [];
  public link: any[]=[];
  public name: any[]=[];
  public add_category: any[]=[];
  

  constructor(
    private apiServices: ApiService,
  ) { 
  this.apiHost = environment.API_HOST;
  }

  ngOnInit(): void {
    this.allGmpData()
  }

  async allGmpData() {
    await this.apiServices.getAllGmp().subscribe((resp: any) => {
      this.allGmp = resp.data;
      this.allGmp.forEach((elem) => {
      this.main_image.push(`${this.apiHost}${elem.news_image[0].src}`)
      this.main_title.push(`${elem.title}`)
      this.logoTitle.push(`${elem.logo_title}`)
      this.link.push(`${elem.link}`)
      this.name.push(`${elem.name}`)
      this.add_category.push(`${elem.sub_category_name}`)
      this.add_category=Array.from(new Set(this.add_category));
      console.log(this.allGmp,"GMP");
      })
       
    });
  }
}
