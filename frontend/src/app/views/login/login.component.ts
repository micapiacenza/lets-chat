import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../common/services/auth/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService) {
  }

  ngOnInit() {
  }

  public login(): void {
    this.auth.userAuth();
  }
}
