import { Injectable } from '@angular/core';
import {User} from "../../classes/user.class";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public user: User | undefined;
  // Array fo dummy data
  public users: Array<User> = [
    {email: 'joe@email.com', pwd: 'qwerty', username: 'joe'},
    {email: 'joe@email.com', pwd: 'qwerty', username: 'joe'},
    {email: 'joe@email.com', pwd: 'qwerty', username: 'joe'},
  ];
  public inputEmail: string = '';
  public inputPdw: string = '';

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  public userAuth() {
    let valid = false;
    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].email === this.inputEmail && this.users[i].pwd === this.inputPdw) {
        valid = true;
        this.router.navigate(['/main-chat']);
      }
      break;
    }
    if (!valid) {
      alert('Error: The user entered does not match any existing user');
    }
  }
}
