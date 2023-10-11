// app.component.ts
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-education-news',
  templateUrl: './education-news.component.html',
  styleUrls: ['./education-news.component.scss'],
})
export class EducationNewsComponent implements OnInit {
  constructor(
    private ngxSpinnerService: NgxSpinnerService,
  ){
  }
  ngOnInit(): void {
    this.ngxSpinnerService.show();
    setTimeout(() => {
      this.ngxSpinnerService.hide();
    }, 1000);

    setTimeout(() => {}, 500);
  }
  educationNews = [
    {
      image: '/assets/new_images/newspage/education/first.jpg',
      title:
        'IIT Roorkee, Imarticus Learning launches HR Management and Analytics certificate programme',
      content:
        'Each batch will have 40 students and the course will commence from October. The course fee is Rs 1 lakh + GST.',
      link: 'https://indianexpress.com/article/education/iit-roorkee-imarticus-learning-launches-hr-management-and-analytics-certificate-programme-8830680/',
    },
    {
      image: '/assets/new_images/newspage/education/second.jpg',
      title:
        'MPPSC PCS Prelims Result 2023 declared on mppsc.mp.gov.in, check here',
      content:
        'Candidates who appeared in the State Preliminary Examination 2023 can now check and download their results from the official website at mppsc.mp.gov.in.',
      link: 'https://timesofindia.indiatimes.com/education/news/mppsc-prelims-result-2023-declared-on-mppsc-mp-gov-in-check-here/articleshow/101703851.cms',
    },
    {
      image: '/assets/new_images/newspage/education/third.avif',
      title:
        'Who Is Preeti Aghalayam? First Woman Director Of IIT Madras Zanzibar',
      content:
        'Preeti Aghalayam has become the first ever woman to be appointed as the director of the IIT Madras Zanzibar campus.',
      link: 'https://www.shethepeople.tv/news/preeti-aghalayam-director-iit-madras-zanzibar',
    },
  ];
}
