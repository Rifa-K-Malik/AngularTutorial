import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userId: number = 10;
  userStatus: string = 'Online';
  allowNewUser = false;
  userCreatedStatus = 'No User is Created';
  userName = "";

  getUserStatus() {
    return this.userStatus;
  }
  constructor() { 
    setTimeout(() => {
      this.allowNewUser = true;
    }, 3000);
   }

   changeUserCreatedStatus() {
     this.userCreatedStatus = 'User is Created';
   }

   onUpdateUser(event: Event) {
   this.userName = (event.target as HTMLInputElement).value;
   }

  ngOnInit(): void {
  }

}
