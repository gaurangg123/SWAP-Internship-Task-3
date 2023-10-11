// app.component.ts
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-weather-news',
  templateUrl: './weather-news.component.html',
  styleUrls: ['./weather-news.component.scss'],
})
export class WeatherNewsComponent implements OnInit {
  constructor(private ngxSpinnerService: NgxSpinnerService) {}
  ngOnInit(): void {
    this.ngxSpinnerService.show();
    setTimeout(() => {
      this.ngxSpinnerService.hide();
    }, 1000);

    setTimeout(() => {}, 500);
  }
  weatherNews = [
    {
      image: '/assets/new_images/newspage/weather/first.webp',
      title:
        'Yamuna Water Level Starts Receding, Low-Lying Areas Still Flooded.',
      content:
        'India Meteorological Department (IMD) has predicted light to moderate rain accompanied by thunderstorms for the next 4-5 days in the national capital.',
      link: 'https://www.ndtv.com/delhi-news/delhi-flood-live-updates-yamuna-water-level-starts-receding-low-lying-areas-still-flooded-4205989',
    },
  ];
}
