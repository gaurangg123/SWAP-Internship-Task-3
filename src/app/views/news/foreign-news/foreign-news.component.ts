// app.component.ts
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-foreign-news',
  templateUrl: './foreign-news.component.html',
  styleUrls: ['./foreign-news.component.scss'],
})
export class ForeignNewsComponent implements OnInit {
  constructor(private ngxSpinnerService: NgxSpinnerService) {}
  ngOnInit(): void {
    this.ngxSpinnerService.show();
    setTimeout(() => {
      this.ngxSpinnerService.hide();
    }, 1000);

    setTimeout(() => {}, 500);
  }
  foreignNews = [
    {
      image: '/assets/new_images/newspage/foreign/first.webp',
      title:
        'UK Visa Fees, Health Surcharge To Go Up Significantly: Rishi Sunak',
      content:
        "The increase in the fees and health surcharge will go towards meeting the rise in the country's public sector wage, the UK Prime Minister said.",
      link: 'https://www.ndtv.com/world-news/uk-visa-fees-health-surcharge-to-go-up-significantly-rishi-sunak-4204874',
    },
    {
      image: '/assets/new_images/newspage/foreign/second.avif',
      title:
        'Wagner mercenary group completing transfer of weapons to Russian armed forces',
      content:
        'Russia’s Defence Ministry said Wagner had transferred more than 2,000 pieces of equipment and over 2,500 tonnes of ammunition',
      link: 'https://www.livemint.com/news/world/wagner-mercenary-group-completing-transfer-of-weapons-to-russian-armed-forces-11689179619799.html',
    },
    {
      image: '/assets/new_images/newspage/foreign/third.jpg',
      title:
        'Viral Animation Of Titan Sub Disaster - 6 Million Views In 12 Days',
      content:
        'The animation video explains that the Implosion was caused by the very high hydrostatic pressure of the surrounding water.',
      link: 'https://www.ndtv.com/feature/video-viral-animation-of-titan-sub-disaster-6-million-views-in-12-days-4203490#News_Trending',
    },
  ];
}
