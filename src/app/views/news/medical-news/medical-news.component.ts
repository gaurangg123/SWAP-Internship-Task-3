// app.component.ts
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-medical-news',
  templateUrl: './medical-news.component.html',
  styleUrls: ['./medical-news.component.scss'],
})
export class MedicalNewsComponent implements OnInit {
  constructor(private ngxSpinnerService: NgxSpinnerService) {}
  ngOnInit(): void {
    this.ngxSpinnerService.show();
    setTimeout(() => {
      this.ngxSpinnerService.hide();
    }, 1000);

    setTimeout(() => {}, 500);
  }
  medicalNews = [
    {
      image: '/assets/new_images/newspage/medical/first.avif',
      title: 'Surging bird flu cases may increase human infection risk: WHO',
      content:
        'There are likely to be more countries where outbreaks have not yet been detected.',
      link: 'https://health.economictimes.indiatimes.com/news/industry/surging-bird-flu-cases-may-increase-human-infection-risk-who/101730881',
    },
    {
      image: '/assets/new_images/newspage/medical/second.webp',
      title: 'Monsoon Health: 5 Tips To Prevent Food And Waterborne Diseases',
      content:
        'As we know, most diseases enter our body through the stomach, so it is important to eat healthy and maintain hygiene in the kitchen.',
      link: 'https://www.gadgets360.com/mobiles/news/ios-17-public-beta-ipados-macos-sonoma-watchos-10-update-features-facetime-messages-4202793',
    },
    {
      image: '/assets/new_images/newspage/medical/third.webp',
      title:
        "A man lost 26 pounds with a beginner's running plan ChatGPT created for him.",
      content: 'A running coach said the workout plan is legit',
      link: 'https://www.businessinsider.in/science/health/news/a-man-lost-26-pounds-with-a-beginners-running-plan-chatgpt-created-for-him-and-a-running-coach-said-the-workout-plan-is-legit/articleshow/101666505.cms',
    },
  ];
}
