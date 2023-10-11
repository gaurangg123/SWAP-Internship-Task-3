import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { AppService } from 'src/app/services/app.service';
import { ToastrService } from 'ngx-toastr';
import { interval } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isLoggedin: boolean = false;
  public sub = "";
  public location: string = '';
  public temperature: number = 0;
  public searchText: string = '';
  private userData: any = JSON.parse(localStorage.getItem('userInfo') || '{}');


  constructor(
    private ngxSpinnerService: NgxSpinnerService,
    private apiService: ApiService,
    private appService: AppService,
    private toastr: ToastrService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.ngxSpinnerService.show()
    setTimeout(() => {
      this.ngxSpinnerService.hide();
    }, 1000);

    setTimeout(() => {

    }, 500)
    interval(1000).subscribe(x => {
      this.isLoggedin = this.appService.checkLoggedIn();
    });
    this.checkUserIP();
    // ---------------------------------------weather api--------------------------------------------
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const apiKey = 'fe86855810afed67cf70a0fef80ffe1c';

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

        this.http.get(url).subscribe((data: any) => {
          this.location = data.name;
          this.temperature = Math.round(data.main.temp - 273.15);
        });
      });
    }
    // ---------------------------------------weather api--------------------------------------------
  }

  checkUserIP() {
    // console.log(this.userData.id);
    let checkLoggedIn = this.userData.id ? { is_logged_in: true } : { is_logged_in: false };
    this.apiService.getUserIp(JSON.stringify(checkLoggedIn)).subscribe((res: any) => {
      if (res.success) {
        console.log(res.message, "- Saving IP");
        this.apiService.checkUserAccess(JSON.stringify(checkLoggedIn)).subscribe((resp: any) => {
          if (resp.success) {
            console.log(resp.message, "- Check access");
            if (!resp.flag) {
              this.toastr.warning('Please Login/Register to access the website');
              this.router.navigate(['/login']);
              this.appService.isUserCanAccess(resp.flag);
            }
          } else {
            console.log(resp.message, "- Check access");
          }
        });
      } else {
        console.log(res.message, "- Saving IP");
      }
    });
  }

  async logout() {
    if (confirm("Are you sure want to logout?")) {
      let userData = JSON.parse(localStorage.getItem('userInfo') || '{}');
      if (userData) {
        await this.apiService.onLogout(JSON.stringify({ email: userData.email })).subscribe((result: any) => {
          if (result.success) {
            this.toastr.success(result.message);
            this.appService.logout();
          } else {
            this.toastr.error('Problem logging out');
          }
        });
      }
    }
  }

  getSearchResults() {
    if (this.searchText !== '') {
      this.router.navigate(["header-search-result", this.searchText]);
      this.searchText = '';
    }
  }
  navigate() {
    this.router.navigate(["/"]);
  }

  currentDate: Date = new Date();

}
