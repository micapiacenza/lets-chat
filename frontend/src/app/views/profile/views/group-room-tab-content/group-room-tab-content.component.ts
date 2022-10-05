import { Component, OnInit } from '@angular/core';
import {Roles} from "../../../../common/interfaces/roles";
import {AuthService} from "../../../../common/services/auth/auth.service";

@Component({
  selector: 'app-group-room-tab-content',
  templateUrl: './group-room-tab-content.component.html',
  styleUrls: ['./group-room-tab-content.component.css']
})
export class GroupRoomTabContentComponent implements OnInit {
  public indexExpanded: number = -1;
  public isExpand: boolean = false;
  public roles = Roles;

  constructor(private auth: AuthService) {
  }

  ngOnInit(): void {
  }

  /**
   * Get current user from AuthService
   */
  public currentUser() {
    return this.auth.getCurrentUser();
  }

  /**
   * Logic to expand/collapse cards
   */
  public expandCard() {
    this.isExpand = ! this.isExpand;
  }
}
