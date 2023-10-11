import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { environment } from 'src/environments/environment';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-internal-page',
  templateUrl: './internal-page.component.html',
  styleUrls: ['./internal-page.component.scss']
})
export class InternalPageComponent implements OnInit {
    public apiHost:any;
    public allData=<any>[];
    public internalRegulatory=<any>[];
    public internalvideos=<any>[];
    public internalNews=<any>[];
  

  public id: any;
  constructor(
    private router: ActivatedRoute, 
    private apiServices: ApiService,
    private ngxSpinnerService: NgxSpinnerService) {
    this.apiHost = environment.API_HOST;
   }
  

  ngOnInit(): void {
    this.id = this.router.snapshot.params.id;
    console.log(this.id, this.router.snapshot)
    this.getBusinessResultbyId();
    this.getRegulatoryResultbyId();
    this.getVideosResultbyId();
    this.getnewsResultbyId();
  }


  async getBusinessResultbyId(){
    await this.apiServices.getInternalBusinessbyId(this.id).subscribe((resp: any) => {
      this.allData = resp.getData;
      console.log(this.allData, 'internal response');
      this.ngxSpinnerService.hide();
    });
  }
  async getRegulatoryResultbyId(){

    await this.apiServices.getinternalRegulatoryById(this.id).subscribe((resp: any) => {
      this.internalRegulatory = resp.getData;
      console.log(this.internalRegulatory, 'internal response gmp');
      this.ngxSpinnerService.hide();
    });
  }
  async getnewsResultbyId(){
    // here
    let data: any = {
      id: this.id,
    }
    this.apiServices.getNewsResultbyId(data).subscribe((resp: any) => {
      console.log(resp);
      this.internalNews = resp.getData;
      console.log(this.internalRegulatory, 'internal news');
      this.ngxSpinnerService.hide();
    });
  }
  async getVideosResultbyId(){
    let data: any = {
      id: this.id,
    }
    console.log(this.id, data)
    // here
      this.apiServices.getVideosResultbyId(data).subscribe((resp: any) => {
      this.internalvideos = resp.getData;
      console.log(this.internalvideos, 'internal video');
      this.ngxSpinnerService.hide();
    });
  }

  renderImage(imgSrc:any) {
    if (imgSrc) {
      return this.apiHost + imgSrc;
    } else {
      return 'Image is broken';
    }
  }

  renderVideo(videoSrc:any) {
    if (videoSrc) {
      return this.apiHost + videoSrc;
    } else {
      return 'Video is broken';
    }
  }

  pdfLink(pdfSrc:any) {
    if (pdfSrc) {
      return this.apiHost + pdfSrc;
    } else {
      return 'PDF is broken';
    }
  }

}
