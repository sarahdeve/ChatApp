import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, AbstractControl, FormBuilder } from '@angular/forms';
import { ChatService } from '../services/chat.service';
import { Router } from '@angular/router';
// import { OwnerForCreation } from '../../_interface/ownerForCreation.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  submitted = false
  public users = [];
  all: any
  allObj = [];
  constructor(public fb: FormBuilder, public chat: ChatService, public router: Router) { }

  ngOnInit(): void {
    let getAllObj = JSON.parse(localStorage.getItem('form-data'));

    getAllObj !== "" ? this.allObj = getAllObj : alert('empty');

    this.signupForm = this.fb.group({
      someFCN: [{ value: '', disabled: false }, Validators.required],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['+234', [Validators.minLength(10), this.validatePhone]],
      // file: { value: '', disabled: false },
      password: ['', Validators.compose([Validators.required, this.chat.patternValidator()])],
      confirmPassword: ['', [Validators.required]],
      regList: [''],

    },
      {
        validator: this.chat.MatchPassword('password', 'confirmPassword'),
      }
    );
    // let user = localStorage.getItem('form-data')
    // this.users = user
  }

  get signupFormControl() {
    return this.signupForm.controls;
  }


  validatePhone(control: AbstractControl): { [key: string]: any } | null {
    if (control.value) {
      if (control.value.length > 15) {
        return { maxlength: true };
      } else {
        return null;
      }
    }
  }

  // onChange(event: Event) {
  //   this.signupForm.controls['file'].setValue(event.target.this.signupForm.value.file[0].name);
  // }


  onSubmit() {

    this.submitted = true;
    if (this.signupForm.valid) {
      let getDate = new Date();
      console.log(this.signupForm.value)
      let all = { username: this.signupForm.value.username, email: this.signupForm.value.email, password: this.signupForm.value.password, phone: this.signupForm.value.phone };
      this.allObj = [...this.allObj, all]
      localStorage.setItem('form-data', JSON.stringify(this.allObj));
      this.router.navigate([`/signin`])
    } else {
      alert('Invalid input');
    }
  }


}
