import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/helpers/must-match.validator';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  private __userId = JSON.parse(localStorage.getItem('userInfo')  || '{}');
  public userInfo: any; 
  public submitted: boolean = false;
  public userSubmitted: boolean = false;
  public changePswForm: FormGroup;
  public updateUserForm: FormGroup;
  @ViewChild('myModalClose') modalClose: ElementRef | undefined;

  constructor(
    private apiService: ApiService,
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private ngxSpinnerService: NgxSpinnerService
  ) {
    this.changePswForm = new FormGroup({
      password: new FormControl(),
      new_password: new FormControl(),
      confirm_password: new FormControl()
    });
    this.updateUserForm = new FormGroup({
      firstname: new FormControl(),
      lastname: new FormControl(),
      company: new FormControl(),
      desigination: new FormControl(),
      city: new FormControl(),
      mobile: new FormControl()
    });
  }

  ngOnInit(): void {
    this.getUserData();
    this.changePswForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      new_password: ['', [Validators.required, Validators.minLength(6)]],
      confirm_password: ['', Validators.required]
    }, {
      validator: MustMatch('new_password', 'confirm_password')
    });
    this.updateUserForm = this.formBuilder.group({
      firstname: ['', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
      lastname: ['', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
      company: ['', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
      desigination: ['', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
      city: ['', [Validators.required, Validators.pattern(/^(\s+\S+\s*)*(?!\s).*$/)]],
      mobile: ['', [Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      email: [{value: '', disabled: true}, [Validators.required, Validators.email]]
    });
  }

  getUserData() {
    this.ngxSpinnerService.show();
    const userId = {
      id: this.__userId?.id
    }
    this.apiService.getUser(JSON.stringify(userId)).subscribe((resp: any) => {
      this.ngxSpinnerService.hide();
      this.userInfo = resp.getData;
      // console.log(resp.getData);
      this.updateUserForm.patchValue({
        firstname: this.userInfo.firstname,
        lastname: this.userInfo.lastname,
        company: this.userInfo.company,
        desigination: this.userInfo.desigination,
        city: this.userInfo.city,
        mobile: this.userInfo.mobile,
        email: this.userInfo.email
      });
    });
  }
  clearData(){
   this.changePswForm.get('password')?.setValue('')
   this.changePswForm.get('new_password')?.setValue('')
   this.changePswForm.get('confirm_password')?.setValue('')  
  }

  get f() { 
    return this.changePswForm.controls;
  }

  get g() { 
    return this.updateUserForm.controls;
  }

  trimValue(formValue: any) { formValue.setValue(formValue.value.trim()); }

  onUserSubmit() {
    this.userSubmitted = true;
    if (this.updateUserForm.invalid) {
      return;
    }
    // console.log(this.updateUserForm.value);
    this.ngxSpinnerService.show();
    this.apiService.updateUser(JSON.stringify(this.updateUserForm.value), this.__userId?.id).subscribe((data: any) => {
      if(data.success) {
        this.ngxSpinnerService.hide();
        this.modalClose?.nativeElement.click();
        this.userSubmitted = false;
        this.toastr.success(data.message);
        this.getUserData();
      } else {
        this.ngxSpinnerService.hide();
        this.toastr.error(data.message);
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.changePswForm.invalid) {
      return;
    }
    // console.log(this.changePswForm.value);
    this.ngxSpinnerService.show();
    this.apiService.changeUserPassword(JSON.stringify(this.changePswForm.value)).subscribe((data: any) => {
      if(data.success) {
        this.ngxSpinnerService.hide();
        this.modalClose?.nativeElement.click();
        this.changePswForm.reset();
        this.submitted = false;
        this.toastr.success(data.message);
      } else {
        this.ngxSpinnerService.hide();
        this.toastr.error(data.message);
      }
    });
  }
  onlyNumberKey(evt: KeyboardEvent) {
    // Only ASCII character in that range allowed
    let ASCIICode = (evt.which) ? evt.which : evt.keyCode;
    return (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57)) ? false : true;
  }


}
