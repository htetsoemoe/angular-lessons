import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notifications-manager',
  templateUrl: './notifications-manager.component.html',
  styleUrls: ['./notifications-manager.component.css']
})
export class NotificationsManagerComponent implements OnInit {

  @Input()
  count:number = 0;

  @Output()
  onChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  addNotification() {
    this.count++;
    this.onChange.emit(this.count);
  }

  removeNotification() {
    if (this.count == 0) {
      return;
    }
    this.count--;
    this.onChange.emit(this.count);
  }

  resetNotification() {
    this.count = 0;
    this.onChange.emit(this.count);
  }

}
