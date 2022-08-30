import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-group-room-tab-content',
  templateUrl: './group-room-tab-content.component.html',
  styleUrls: ['./group-room-tab-content.component.css']
})
export class GroupRoomTabContentComponent implements OnInit {
  public groupList = [
    'Group 1',
    'Group 2',
    'Group 3',
    'Group 4',
    'Group 5',
  ];
  public roomList = [
    'Room 1',
    'Room 2',
    'Room 3',
  ];
  public indexExpanded: number= -1;
  public isExpand: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  public expandCard() {
    this.isExpand = ! this.isExpand;
  }
}
