import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-header-search-result',
  templateUrl: './header-search-result.component.html',
  styleUrls: ['./header-search-result.component.scss']
})
export class HeaderSearchResultComponent implements OnInit {
  public toSearch: any;
  public allData: any;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private ngxSpinnerService: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.toSearch = params['searchData'];
      this.getSearchData();
    });
  }

  getSearchData() {
    this.ngxSpinnerService.show();
    const sentData = {
      title: this.toSearch
    }
    this.apiService.headerSearchData(sentData).subscribe((resp: any) => {
      this.allData = resp.data;
      this.ngxSpinnerService.hide();
      console.log(sentData)
    });
  }

}
