// app.component.ts
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-business-news',
  templateUrl: './business-news.component.html',
  styleUrls: ['./business-news.component.scss'],
})
export class BusinessNewsComponent implements OnInit {
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
  businessNews = [
    {
      image: '/assets/new_images/newspage/business/second.avif',
      title: 'TCS Results Q1 2023',
      content:
        'TCS revenue from operations increased 12.5 percent to Rs 59,381 crore in the said quarter from Rs 52,758 crore in June 2022.',
      link: 'https://timesofindia.indiatimes.com/india/odisha-coromandel-express-train-accident-news-live-several-dead-injured-as-odisha-bahanaga-train-derails-june-4/liveblog/100733123.cms',
    },
    {
      image: '/assets/new_images/newspage/business/third.avif',
      title: 'Gold, Silver prices surge by about ₹200 each as dollar dips',
      content:
        'Gold prices in Delhi rose by ₹195 to ₹59,700 per 10 grams, while silver increased by ₹200 to ₹72,700 per kilogram. ',
      link: 'https://www.livemint.com/market/gold-and-sliver-prices-surges-by-rs-195-and-rs-200-each-as-dollar-dips-check-prices-11689169142705.html',
    },
    {
      image: '/assets/new_images/newspage/business/first.webp',
      title: 'An era ends as HDFC shares stop trading on stock exchanges',
      content:
        'HDFC’s growth story is also the story of India home loan market over decades. At one point, this company was the only home loan provider in India.',
      link: 'https://www.moneycontrol.com/news/business/an-era-ends-as-hdfc-shares-stop-trading-on-stock-exchanges-10947341.html',
    },
  ];
}