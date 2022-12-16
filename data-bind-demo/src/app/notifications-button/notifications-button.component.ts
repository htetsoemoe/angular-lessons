import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications-button',
  templateUrl: './notifications-button.component.html',
  styleUrls: ['./notifications-button.component.css']
})
export class NotificationsButtonComponent implements OnInit {

  @Input()
  count:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
