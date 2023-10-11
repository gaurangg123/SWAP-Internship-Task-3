import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private __userId = JSON.parse(localStorage.getItem('userInfo')  || '{}');
  private __canAccess: boolean = true;

  constructor(
    private router: Router,
    private apiService: ApiService
  ) { }

  login(getLoginDetail: any) {
    const loginTimeFor = {
      "user_id": getLoginDetail?.id,
      "type": "Login",
      "firstname": getLoginDetail.firstname,
      "lastname": getLoginDetail.lastname,
      "email": getLoginDetail.email
    }
    // console.log(loginTimeFor);
    this.apiService.userLoginLogoutTime(JSON.stringify(loginTimeFor)).subscribe((resp: any) => {
      console.log(resp);
    });
    localStorage.setItem('userInfo', JSON.stringify(getLoginDetail));
    this.__canAccess = true;
    this.router.navigate(['/']);
  }

  logout() {
    // const logoutTimeFor = {
    //   "user_id": this.__userId?.id,
    //   "type":"Logout"
    // }
    // // console.log(logoutTimeFor);
    // this.apiService.userLoginLogoutTime(JSON.stringify(logoutTimeFor)).subscribe((resp: any) => {
    //   console.log(resp);
    // });
    localStorage.removeItem('userInfo');
    this.__canAccess = false;
    this.router.navigate(['/login']);
  }

  isUserCanAccess(permit: boolean) {
    this.__canAccess = permit;
  }

  loggedIn() {
    return this.__canAccess;
  }

  checkLoggedIn() {
    return (!!localStorage.getItem('userInfo'))
  }
}
