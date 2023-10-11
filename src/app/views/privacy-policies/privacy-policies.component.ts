import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-privacy-policies',
  templateUrl: './privacy-policies.component.html',
  styleUrls: ['./privacy-policies.component.scss']
})
export class PrivacyPoliciesComponent implements OnInit {

  getData:any [] = []
  constructor(
    private apiService: ApiService, 
    private ngxSpinnerService: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getContent()

  }

  getContent(){
    this.apiService.getPrivacyPolicyContent().subscribe((res :any)=>{
      console.log(res)
      if(res.success){
        this.getData = res.data
      }
    })
  }
}
