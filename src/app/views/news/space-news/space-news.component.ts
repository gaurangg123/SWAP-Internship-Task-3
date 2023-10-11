// app.component.ts
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-space-news',
  templateUrl: './space-news.component.html',
  styleUrls: ['./space-news.component.scss'],
})
export class SpaceNewsComponent implements OnInit {
  constructor(private ngxSpinnerService: NgxSpinnerService) {}
  ngOnInit(): void {
    this.ngxSpinnerService.show();
    setTimeout(() => {
      this.ngxSpinnerService.hide();
    }, 1000);

    setTimeout(() => {}, 500);
  }
  spaceNews = [
    {
      image: '/assets/new_images/newspage/space/first.jpg',
      title: 'Stunning Webb telescope image shows closest star-forming region.',
      content:
        'The image shows how the jets of material emanating from young stars affect the surrounding gas and dust while lighting up molecular hydrogen.',
      link: 'https://www.thehindu.com/sci-tech/science/nasa-james-webb-telescope-images-star-forming-region-rho-ophiuchi-cloud-complex/article67075133.ece',
    },
    {
      image: '/assets/new_images/newspage/space/second.webp',
      title: 'India Shoots For The Moon With Chandrayaan-3 Launch Today.',
      content:
        'ISRO says learning from the last moon mission, it has reduced the number of engines on the lander from five to four, and updated the software.',
      link: 'https://www.ndtv.com/india-news/chandrayaan-3-to-lift-off-today-for-the-6-week-journey-to-moon-10-points-4205795',
    },
    {
      image: '/assets/new_images/newspage/space/third.webp',
      title:
        'Life beyond Earth? NASA’s Perseverance rover finds diverse organic matter on Mars.',
      content:
        'A high possibility for past habitability exists at the rover’s landing site in Jezero Crater.',
      link: 'https://www.ndtv.com/science/nasas-perseverance-rover-finds-diverse-set-of-organic-molecules-on-mars-4202515',
    },
  ];
}
