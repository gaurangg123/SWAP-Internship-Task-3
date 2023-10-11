import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  public resetPswForm: FormGroup;
  public getEmail: any;
  submitted: boolean = false;

  constructor(
    private toastr: ToastrService,
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    private ngxSpinnerService: NgxSpinnerService
  ) { 
    this.resetPswForm = new FormGroup({
      email: new FormControl(),
      new_password: new FormControl(),
      confirm_password: new FormControl()
    });
  }

  ngOnInit(): void {
    this.resetPswForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      new_password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirm_password: new FormControl('', Validators.required),
    });
    this.getEmail = this.route.snapshot.paramMap.get('emailAdd');
    this.resetPswForm.get("email")?.setValue(this.getEmail);
  }

  get f() { return this.resetPswForm.controls; }

  async resetPsw() {
    this.submitted = true;
    if (this.resetPswForm.invalid) {
      return;
    }
    this.ngxSpinnerService.show();
    await this.apiService.resetForgotPsw(JSON.stringify(this.resetPswForm.value)).subscribe((result: any) => {
      if (result.success) {
        this.ngxSpinnerService.hide();
        this.toastr.success(result.message);
        this.router.navigate(['/login']);
      } else {
        this.ngxSpinnerService.hide();
        this.toastr.error(result.message);
      }
    });
  }
}