import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-regulatory-guidelines',
  templateUrl: './regulatory-guidelines.component.html',
  styleUrls: ['./regulatory-guidelines.component.scss']
})
export class RegulatoryGuidelinesComponent implements OnInit {
  public allBusiness: any[] = [];
  public apiHost:any;
  public title: any[] = [];
  public image: any[] = [];
  public pdf: any[] = [];
  public video: any[] = [];
  public content: any[] = [];
  public logo_image: any[] = [];
  public logotitle: any[] = [];
  public name:any[]=[];
  public add_category: any[]=[];
  linkArr: Array<any> = [];
  public title_Link:any[]=[];
  
  constructor(
    private apiServices: ApiService,
  ) { 
  this.apiHost = environment.API_HOST;
  }

  ngOnInit(): void {
    this.allBusinessData();
  }
  fun(data:any){
    console.log(data)
    
  }

  async allBusinessData() {
    await this.apiServices.getAllBusiness().subscribe((resp: any) => {
      console.log(resp, "!!!!!!!!!!!!!!!!!")
      this.allBusiness = resp.data;
      this.allBusiness.forEach((elem) => {
       
        if(elem.name=='External Business'){
          this.logo_image.push(`${this.apiHost}${elem?.logo_image[0]?.src}`)
          this.linkArr.push(elem.logo_link)
          this.title_Link.push(elem.link)
        } else {
          this.logo_image.push('')
          this.linkArr.push('')
          this.title_Link.push('')
        }
        this.image.push(`${this.apiHost}${elem.news_image[0].src}`)
        this.title.push(`${elem.title}`)
        this.content.push(`${elem.news_content}`)
        this.logotitle.push(`${elem.logo_title}`)
        this.name.push(`${elem.name}`)
        this.add_category.push(`${elem.sub_category_name}`)
        this.add_category=Array.from(new Set(this.add_category));
      })
      
      
    });
  }
 
}
