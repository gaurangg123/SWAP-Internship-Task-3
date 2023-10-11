import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-gmp-training',
  templateUrl: './gmp-training.component.html',
  styleUrls: ['./gmp-training.component.scss']
})
export class GmpTrainingComponent implements OnInit {
  public allGuidelines: any[] = [];
  public apiHost:any;
  public main_title: any[] = [];
  public main_image: any[] = [];
  public pptUrl: any[] = [];
  public video: any[] = [];
  public link: any[] = [];
  public logotitle: any[] = [];
  public name:any[]=[];
  public add_category: any[]=[];
  public internalRegulatory: any[]=[];

  constructor(
    private apiServices: ApiService,
  ) { 
  this.apiHost = environment.API_HOST;
  }

  ngOnInit(): void {
    this.allGuidelinesData()
  }

  async allGuidelinesData() {
    await this.apiServices.getAllGuidelines().subscribe((resp: any) => {
      console.log(resp)
      this.allGuidelines = resp.data;
        this.allGuidelines.forEach((elem) => {
        this.main_image.push(`${this.apiHost}${elem.news_image[0].src}`)
        this.main_title.push(`${elem.title}`)
        this.link.push(`${elem.link}`)
        this.pptUrl.push(`${elem.pdfurl}`)
        this.name.push(`${elem.name}`)
        this.add_category.push(`${elem.sub_category_name}`)
        this.add_category=Array.from(new Set(this.add_category));
        console.log(this.allGuidelines,'kkkkkkkkkkkkkk');
      })
    });
  }
}
