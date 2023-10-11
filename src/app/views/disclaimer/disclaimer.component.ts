import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-disclaimer',
  templateUrl: './disclaimer.component.html',
  styleUrls: ['./disclaimer.component.scss']
})
export class DisclaimerComponent implements OnInit {

  getData:any [] = []
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getContent()

  }

  getContent(){
    this.apiService.getDisclaimerContent().subscribe((res :any)=>{
      console.log(res)
      if(res.success){
        this.getData = res.data
      }
    })
  }

}
