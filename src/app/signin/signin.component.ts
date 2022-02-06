import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { newArray } from '@angular/compiler/src/util';
import { element } from 'protractor';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(public router: Router) { }
  public email;
  public password;
  public loginAray = [];

  ngOnInit(): void {
    let loginObj = JSON.parse(localStorage.getItem('form-data'));
    this.loginAray = loginObj;
    console.log(this.loginAray);
  }

  submit() {

    let activeUser = this.loginAray.filter(user => user.email == this.email && user.password == this.password);
    console.log(activeUser);
    if (!activeUser) {
      alert("Incorrect Account Details")
    } else {
      localStorage.setItem('active', JSON.stringify(activeUser))
      this.router.navigate(['/chatpage'])
    }


    // let findIndex = this.loginAray.findIndex(find => find.email == this.email && find.password == this.password);
    // console.log(findIndex);
    // if (findIndex == -1) {
    //   alert("Incorrect Account Details")
    // } else {
    //   this.router.navigate(['/chatpage'])
    // }

    // Obj.forEach(ele => {
    //   console.log(ele.email);
    //   if (ele.email == this.email || ele.password == this.password) {
    //     console.log('you are doing well', ele.email, ele.password);
    //     this.router.navigate(['/chat']);
    //   } else {
    //     console.log(ele.email);
    //     alert('You are not permitted inhere');
    //     this.router.navigate([`signin`]);
    //   }
    // })
    // if (Obj.email[0] == this.email || obj.password[0] == this.password) {
    //   console.log('you are doing well', newAray.email, newAray.password);
    //   this.router.navigate(['/chatpage']);
    // } else {
    //   console.log(newAray.email);
    //   alert('You are not permitted inhere');
    //   this.router.navigate([`signin`]);
    // }
    // if (Obj.length != 0) {
    //   localStorage.setItem('currentUser', JSON.stringify(this.email))
    // } else {
    //   this.router.navigate(['/chat']);
    //   alert('You are noty permitted inhere');
    // }
  }

}
