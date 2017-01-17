import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  users = ['mj@qa.com', 'sa@qa.com', 'pm@qa.com', 'tb@qa.com'];
  selectedUser: string = '';

  constructor() { }

  simulatelogin(userid: string) {
    this.selectedUser = userid;
    localStorage.setItem('userid', this.selectedUser);
    window.location.reload();
  }


}
