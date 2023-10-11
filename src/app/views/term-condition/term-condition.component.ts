import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-term-condition',
  templateUrl: './term-condition.component.html',
  styleUrls: ['./term-condition.component.scss']
})
export class TermConditionComponent implements OnInit {

  getData:any [] = []
  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.getContent()

  }
  getContent(){
    this.apiService.getTermsConditionsContent().subscribe((res :any)=>{
      console.log(res)
      if(res.success){
        this.getData = res.data
      }
    })
  }

}
