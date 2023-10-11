import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { AppService } from 'src/app/services/app.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
// import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder, 
    private toastr: ToastrService,
    private apiService: ApiService,
    private appService: AppService,
    private ngxSpinnerService: NgxSpinnerService
    ) {
    this.loginForm = new FormGroup({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  get f() { return this.loginForm.controls; }
  handleSignUp(){
    console.log("WORKING")
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.ngxSpinnerService.show();
    this.apiService.onLogin(JSON.stringify(this.loginForm.value)).subscribe((data: any) => {
      if(data.success) {
        this.ngxSpinnerService.hide();
        this.toastr.success(data.message);
        this.appService.login(data.userInfo);
      } else {
        this.ngxSpinnerService.hide();
        this.toastr.error(data.message);
      }
    });
  }

  
}
