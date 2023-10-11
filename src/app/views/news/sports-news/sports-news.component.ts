// app.component.ts
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.scss'],
})
export class SportsNewsComponent implements OnInit {
  constructor(private ngxSpinnerService: NgxSpinnerService) {}
  ngOnInit(): void {
    this.ngxSpinnerService.show();
    setTimeout(() => {
      this.ngxSpinnerService.hide();
    }, 1000);

    setTimeout(() => {}, 500);
  }
  sportsNews = [
    {
      image: '/assets/new_images/newspage/sports/third.avif',
      title:
        'How does Max Verstappen and Red Bull compare to the greats of Formula One?',
      content:
        'Verstappen has won eight of this season’s 10 races, with team-mate Sergio Perez taking the other two.',
      link: 'https://www.independent.co.uk/f1/max-verstappen-sergio-perez-ayrton-senna-red-bull-alain-prost-b2372471.html',
    },
    {
      image: '/assets/new_images/newspage/sports/first.avif',
      title:
        'IND vs WI: Yashasvi Jaiswal achieves huge milestone, surpasses Sachin Tendulkar, Shubman Gill in unique list.',
      content:
        "Jaiswal's Test debut is particularly noteworthy as he surpassed the records of Sachin Tendulkar and Shubman Gill.",
      link: 'https://timesofindia.indiatimes.com/sports/cricket/india-in-west-indies/this-is-just-the-start-says-yashasvi-jaiswal-after-ton-on-test-debut/articleshow/101742094.cms?from=mdr',
    },
    {
      image: '/assets/new_images/newspage/sports/second.webp',
      title:
        "PM Narendra Modi's Kylian Mbappe Known To More People In India, Gets Crowd Buzzing",
      content:
        'ISRO says learning from the last moon mission, it has reduced the number of engines on the lander from five to four, and updated the software.',
      link: 'https://www.ndtv.com/india-news/chandrayaan-3-to-lift-off-today-for-the-6-week-journey-to-moon-10-points-4205795',
    },
  ];
}
