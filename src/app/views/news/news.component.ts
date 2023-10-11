import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  public allNews: any[] = [];
  // public allNewsSubCat: any[] = [];
  // public newsSubCatDD: any[] = [];
  // public allVideoSubCat: any[] = [];
  // public videoSubCatDD: any[] = [];
  public newsImg: Array<any> = [];
  public Title: any[] = [];
  public apiHost: any;
  public add_category: any[] = [];
  public name: any[] = [];
  public logo_image: any[] = [];
  public logotitle: any[] = [];
  public link: any[] = [];
  public logo_link: any[] = [];
  showContent = false;
  toggleContent() {
    this.showContent = !this.showContent;
  }
  constructor(
    private apiServices: ApiService,
    private ngxSpinnerService: NgxSpinnerService,
  ) {
    this.apiHost = environment.API_HOST;
  }

  ngOnInit(): void {
    this.allNewsData();
    this.ngxSpinnerService.show();
    setTimeout(() => {
      this.ngxSpinnerService.hide();
    }, 1000);

    setTimeout(() => {}, 500);

  }

  async allNewsData() {
    this.apiServices.getAllNews().subscribe((resp: any) => {
      this.allNews = resp.data;
      this.allNews.forEach((elem) => {
        if (elem.name == 'External News') {
          this.logo_image.push(`${this.apiHost}${elem.logo_image[0].src}`);
        } else {
          this.logo_image.push('');
        }
        this.newsImg.push(`${this.apiHost}${elem.news_image[0].src}`);

        this.add_category.push(`${elem.sub_category_name}`);
        this.add_category = Array.from(new Set(this.add_category));
        this.Title.push(`${elem.title}`);
        this.link.push(elem.link);
        this.logo_link.push(elem.logo_link);
        this.logotitle.push(`${elem.logo_title}`);
        this.name.push(`${elem.name}`);
      });
      console.log(this.allNews, 'news api');
    });
  }
}
