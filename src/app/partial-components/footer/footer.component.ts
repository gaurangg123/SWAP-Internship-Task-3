import { Component, OnInit,AfterViewInit,
  ViewChild,
  Output,
  EventEmitter, } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
declare var $: any;
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

   isLoggedIn = false;
  public allCategoryName: any;

  constructor(private apiServices: ApiService) { }

  ngOnInit(): void {
    this.getCategoryName();
  }

  scroll(){
    document.getElementById('scroll')?.scrollIntoView({behavior:'smooth'})
    //console.log('kkk');
  }

  async getCategoryName() {
    await this.apiServices.getAllCategoryNames().subscribe((resp: any) => { 
      // console.log("dta" , resp);
      
      this.allCategoryName = resp.data;
    });
  }

 

}
