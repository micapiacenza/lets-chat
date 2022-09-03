import { Component, OnInit } from '@angular/core';
import {Roles} from "../../../../common/interfaces/roles";
import {AuthService} from "../../../../common/services/auth/auth.service";

@Component({
  selector: 'app-users-tab-content',
  templateUrl: './users-tab-content.component.html',
  styleUrls: ['./users-tab-content.component.css']
})
export class UsersTabContentComponent implements OnInit {
  public userList = [
    'user 1',
    'user 1',
    'user 1',
    'user 1',
    'user 1',
    'user 1',
    'user 1',
  ];
  public roles = Roles;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  /**
   * Get current user from AuthService
   */
  public currentUser() {
    return this.auth.getCurrentUser();
  }

}
