import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // TODO
  // 1. Add check if logged in show myProfile and logout
  // 2. If logged in Let's Chat title redirect to chat-main

}
