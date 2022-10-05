import {Component, OnInit} from '@angular/core';
import {Roles} from "../../../../common/interfaces/roles";
import {AuthService} from "../../../../common/services/auth/auth.service";
import {STORAGE_KEYS, StorageService} from "../../../../common/services/storage/storage.service";

@Component({
  selector: 'app-users-tab-content',
  templateUrl: './users-tab-content.component.html',
  styleUrls: ['./users-tab-content.component.css']
})
export class UsersTabContentComponent implements OnInit {
  public roles = Roles;
  public users: any;
  constructor(private auth: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    this.users=this.getAllUsers();
  }

  /**
   * Get all users from AuthService
   */
  public getAllUsers() {
    return this.storageService.getItem(STORAGE_KEYS.users);
  }

  /**
   * Get current user from AuthService
   */
  public currentUser() {
    return this.auth.getCurrentUser();
  }

}
