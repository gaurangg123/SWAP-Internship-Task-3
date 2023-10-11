import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  public allVideos: any[] = [];
  public apiHost:any;
  public main_title: any[] = [];
  public main_image: any[] = [];
  public link: any[] = [];
  public logo_link:any[]=[];
  public logotitle: any[] = [];
  public logo_image: any[] = [];
  public name:any[]=[];
  public add_category: any[]=[];
  
  public thisIsVideos: Array<any> = [] 

  constructor(
    private apiServices: ApiService,
  ) { 
  this.apiHost = environment.API_HOST;
  }

  ngOnInit(): void {
    this.allVideosData()
  }
  async allVideosData() {
     this.apiServices.getAllVideos().subscribe((resp: any) => {
      console.log(resp)
      this.allVideos = resp.data;
      this.allVideos.forEach((elem) => {
        console.log(elem, elem?.video_file[0]?.src)
        if(elem.name=='External Videos'){
          this.logo_image.push(`${this.apiHost}${elem.logo_image[0].src}`)  
          this.link.push(elem.link)
        } else {
          this.link.push(`${this.apiHost}${elem?.video_file[0]?.src}`)
          this.logo_image.push('')
        }
        this.logo_link.push(elem.logo_link)
        this.main_title.push(`${elem.title}`)
        this.logotitle.push(`${elem.logo_title}`)
        this.name.push(`${elem.name}`)
        this.add_category.push(`${elem.sub_category_name}`)
        this.add_category=Array.from(new Set(this.add_category));
      })
      if(resp.success){
        resp.data.map((res: any) => {
          if(res.name == "Internal Videos"){
            this.thisIsVideos.push({name: 'Internal', src: `${this.apiHost}${res.video_file[0].src}`})
          } else {
            this.thisIsVideos.push({name: "External", src: `${this.apiHost}${res.news_image[0].src}`})
          }
        })
      }
      console.log(this.link)
      // console.log(this.thisIsVideos)
      // console.log(this.allVideos,"videos", this.main_image, this.video);
    });
  }

}
