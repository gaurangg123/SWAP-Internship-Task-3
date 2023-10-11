// app.component.ts
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-entertainment-news',
  templateUrl: './entertainment-news.component.html',
  styleUrls: ['./entertainment-news.component.scss'],
})
export class EntertainmentNewsComponent implements OnInit {
  constructor(private ngxSpinnerService: NgxSpinnerService) {}
  ngOnInit(): void {
    this.ngxSpinnerService.show();
    setTimeout(() => {
      this.ngxSpinnerService.hide();
    }, 1000);

    setTimeout(() => {}, 500);
  }
  entertainmentNews = [
    {
      image: '/assets/new_images/newspage/entertainment/first.jpg',
      title:
        'Mission: Impossible 7 Box Office Day 1 :Tom Cruise Starrer Off To An Impressive Start.',
      content:
        ' Mission: Impossible 7 has managed to pull off an estimated collection of $16 million on day 1 including $7 million from previews.',
      link: 'https://www.koimoi.com/box-office/mission-impossible-7-box-office-day-1-domestic-tom-cruise-starrer-off-to-an-impressive-start-might-come-close-to-100-million-in-5-day-extended-weekend/',
    },
    {
      image: '/assets/new_images/newspage/entertainment/second.jpg',
      title:
        'Bigg Boss OTT 2: Aashika Bhatia and Elvish Yadav to enter as wild cards.',
      content:
        'As Bigg Boss OTT 2 gets an extension, makers have decided to introduce two new contestants- Aashika Bhatia and Elvish Yadav.',
      link: 'https://indianexpress.com/article/entertainment/web-series/bigg-boss-ott-2-aashika-bhatia-and-elvish-yadav-to-enter-as-wild-cards-8830515/',
    },
    {
      image: '/assets/new_images/newspage/entertainment/third.avif',
      title:
        "Nitesh Tiwari confident his Ramayan won't offend despite 'Adipurush' controversies",
      content:
        "His version of Ramayan won't offend anyone despite the controversies surrounding 'Adipurush'. The Om Raut directorial was also a modern adaptation of Ramayan.",
      link: 'https://www.indiatoday.in/movies/bollywood/story/nitesh-tiwari-confident-his-ramayan-wont-hurt-adipurush-controveries-prabhas-kriti-sanon-saif-ali-khan-2405877-2023-07-13',
    },
  ];
}
