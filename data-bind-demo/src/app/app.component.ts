import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-bind-demo';

  notiCount:number = 1;

  itemList:string[] = [];

  updateNotiCount(count:number) {
    this.notiCount = count;
  }

  addItemToList(item:string) {
    this.itemList.push(item);
  }
}
