import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth/auth.service";

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  // TODO
  // 1. Add check if logged in show myProfile and logout
  // 2. If logged in Let's Chat title redirect to chat-main

  public logOut() {
    this.auth.logOut();
  }

}
