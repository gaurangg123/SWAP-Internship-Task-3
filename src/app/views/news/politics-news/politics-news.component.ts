// app.component.ts
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-politics-news',
  templateUrl: './politics-news.component.html',
  styleUrls: ['./politics-news.component.scss'],
})
export class PoliticsNewsComponent implements OnInit {
  constructor(private ngxSpinnerService: NgxSpinnerService) {}
  ngOnInit(): void {
    this.ngxSpinnerService.show();
    setTimeout(() => {
      this.ngxSpinnerService.hide();
    }, 1000);

    setTimeout(() => {}, 500);
  }
  politicsNews = [
    {
      image: '/assets/new_images/newspage/politics/first.jpg',
      title:
        'Minister Puri stresses on creating holistic policy ecosystem for urban planning.',
      content:
        'There are likely to be more countries where outbreaks have not yet been detected.',
      link: 'https://health.economictimes.indiatimes.com/news/industry/surging-bird-flu-cases-may-increase-human-infection-risk-who/101730881',
    },
    {
      image: '/assets/new_images/newspage/politics/second.avif',
      title:
        'Blow to Devendra Fadnavis as Ajit Pawar’s NCP likely to get finance portfolio.',
      content:
        'Pawar has secured the finance portfolio following late-night meetings with Shinde and Fadnavis.',
      link: 'https://indianexpress.com/article/cities/mumbai/maharashtra-news-live-updates-politics-shiv-sena-bjp-ncp-eknath-shinde-ajit-pawar-cabinet-portfolios-8832340/',
    },
    {
      image: '/assets/new_images/newspage/politics/fourth.jpg',
      title:
        'Bengal panchayat elections: ‘Strike rate’ suggests BJP is no spent force.',
      content:
        'The rise in the BJP’s strike rate indicates its success in arresting the steady decline it had suffered since the 2021 Assembly elections.',
      link: 'https://www.telegraphindia.com/west-bengal/bengal-panchayat-elections-strike-rate-suggests-bjp-is-no-spent-force/cid/1951670',
    },
  ];
}
