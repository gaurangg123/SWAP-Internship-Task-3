import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public forgotPasswordForm: FormGroup;
  public isEmailExist = false;
  public msg = 'Send OTP';
  submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder, 
    private apiService: ApiService,
    private toastr: ToastrService,
    private router: Router,
    private ngxSpinnerService: NgxSpinnerService
    ) {
    this.forgotPasswordForm = new FormGroup({
      email: new FormControl(),
      otp: new FormControl(),
    });
  }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      otp: [null]
    });
  }

  get f() { return this.forgotPasswordForm.controls; }

  async forgotPassword() {
    console.log(this.forgotPasswordForm.getRawValue());
    this.submitted = true;
    if (this.forgotPasswordForm.invalid) {
      return;
    }
    if(!this.isEmailExist) {
      let forgotPswData = {
        email: this.forgotPasswordForm.value.email
      };
      this.ngxSpinnerService.show();
      await this.apiService.checkEmailForgotPsw(JSON.stringify(forgotPswData)).subscribe((result: any) => {
        // console.log(result);
        if (result.success) {
          // console.log(result, "ssssssssssssssssssssssssssss");
          this.ngxSpinnerService.hide();
          this.toastr.success(result.message);
          this.isEmailExist = true;
          this.msg = 'Continue';
        } else {
          this.ngxSpinnerService.hide();
          // console.log(result, "ssssssssssssssssssssssssssss");
          this.toastr.error(result.message);
        }
      });
    } else {
      if(
        this.forgotPasswordForm.get("otp")?.value === null || 
        this.forgotPasswordForm.get("otp")?.value === undefined || 
        this.forgotPasswordForm.get("otp")?.value === ""
      ) {
        this.toastr.error("Please enter OTP");
        return;
      }
      this.ngxSpinnerService.show();
      await this.apiService.checkOTPForgotPsw(JSON.stringify(this.forgotPasswordForm.value)).subscribe((result: any) => {
        // console.log(result);
        if (result.success) {
          this.ngxSpinnerService.hide();
          this.toastr.success(result.message);
          this.router.navigate(['/reset-password/' + this.forgotPasswordForm.get("email")?.value]);
        } else {
          this.ngxSpinnerService.hide();
          this.toastr.error(result.message);
        }
      });
    }
  }
}
