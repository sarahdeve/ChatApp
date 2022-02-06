import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor() { }
  public userArray = [];
  public userstext = '';
  public messages = [];
  public userNewArray = [];
  public actUser;
  public receive;

  ngOnInit(): void {
    let Obj = JSON.parse(localStorage.getItem('chatting'));
    if (Obj) {
      this.messages = Obj;
    } else {
      this.messages = [];
    }
    // console.log(this.userNewArray);


    let userObj = JSON.parse(localStorage.getItem('form-data'));
    let act = JSON.parse(localStorage.getItem('active'));
    this.actUser = act[0];
    if (userObj) {

      let p = userObj.filter(user => user.email !== this.actUser.email && user.password !== this.actUser.password)
      this.userArray = p;
      console.log(p)
    } else {
      this.userArray = [];
    }
    console.log(userObj);
  }

  receiver(x) {
    this.receive = x.email;
  }

  submit() {
    let getDate = new Date();
    let usertext = { Text: this.userstext, time: getDate.toLocaleTimeString(), sender: this.actUser.email, receiver: this.receive };
    this.messages = [...this.messages, usertext];
    localStorage.setItem('chatting', JSON.stringify(this.messages));
    // this.messages;

    // let Obj = this.userArray.filter((newUserArray, index) => this.messages === newUserArray.Text);
    // if (Obj.length != 0) {
    //   localStorage.setItem('presentUser', JSON.stringify(this.messages));
    // }
  }
}
