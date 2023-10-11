import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AppService } from '../services/app.service';

@Injectable({
  providedIn: 'root'
})
export class NonAuthGuard implements CanActivate {
  constructor(
    private _appService: AppService, 
    private _router: Router
  ) {}

  canActivate(): boolean {
    return this.checkIfLoggedIn();
  }

  checkIfLoggedIn(): boolean {
    if(this._appService.checkLoggedIn()) {
      this._router.navigate(['/']);
      return false;
    } else {
      return true;
    }
  } 
}
