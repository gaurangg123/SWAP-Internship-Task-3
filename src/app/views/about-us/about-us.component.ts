import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ViewportScroller } from '@angular/common'; //import
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  getData: any[] = []
  constructor(
    private apiService: ApiService,
    private ngxSpinnerService: NgxSpinnerService,
    private router: Router, private viewPortScroller: ViewportScroller) {

  }

  ngOnInit(): void {
    this.getContent()
    this.ngxSpinnerService.show()
    setTimeout(() => {
      this.ngxSpinnerService.hide();
    }, 1000);

    setTimeout(() => {

    }, 500)


  }



  // const Viewer = new Viewer(document.getElementById('image'), {
  //   inline: true,
  //   viewed() {
  //     Viewer.zoomTo(1);
  //   },
  // });

  // View a list of images.
  // Note: All images within the container will be found by calling `element.querySelectorAll('img')`.
  //const gallery = new Viewer(document.getElementById('images'));
  // Then, show one image by click it, or call `gallery.show()`.

  getContent() {
    this.apiService.getAboutUsContent().subscribe((res: any) => {
      console.log(res)
      if (res.success) {
        this.getData = res.data
      }
    })
  }

}
