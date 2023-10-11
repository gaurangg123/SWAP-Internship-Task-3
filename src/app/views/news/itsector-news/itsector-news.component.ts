// app.component.ts
import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-itsector-news',
  templateUrl: './itsector-news.component.html',
  styleUrls: ['./itsector-news.component.scss'],
})
export class ItsectorNewsComponent implements OnInit {
  constructor(private ngxSpinnerService: NgxSpinnerService) {}
  ngOnInit(): void {
    this.ngxSpinnerService.show();
    setTimeout(() => {
      this.ngxSpinnerService.hide();
    }, 1000);

    setTimeout(() => {}, 500);
  }
  itsectorNews = [
    {
      image: '/assets/new_images/newspage/itsect/first.jpg',
      title:
        'Adobe Firefly AI adds support prompts in 100+ languages, including 8 Indian languages',
      content:
        'This update enables users worldwide to create images and text effects using their native languages in the standalone Firefly web service.',
      link: 'https://www.fonearena.com/blog/398889/adobe-firefly-ai-prompts-8-indian-languages.html',
    },
    {
      image: '/assets/new_images/newspage/itsect/second.webp',
      title: 'iOS 17, iPadOS 17 and macOS Sonoma Public Beta 1 Rolling Out',
      content:
        "Apple's public beta releases are relatively more stable compared to developer previews and allow users to try out more reliable testing versions.",
      link: 'https://www.gadgets360.com/mobiles/news/ios-17-public-beta-ipados-macos-sonoma-watchos-10-update-features-facetime-messages-4202793',
    },
    {
      image: '/assets/new_images/newspage/itsect/third.webp',
      title: 'AI doomsday scenarios are gaining traction in Silicon Valley.',
      content:
        'Controversial AI theorist Eliezer Yudkowsky sits on the fringe of the industry’s most extreme circle of commentators, where extinction of the human species is the inevitable result of developing advanced art ..',
      link: 'https://timesofindia.indiatimes.com/gadgets-news/ai-doomsday-scenarios-are-gaining-traction-in-silicon-valley/articleshow/101722135.cms',
    },
  ];
}
