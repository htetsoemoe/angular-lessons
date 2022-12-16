import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-output',
  templateUrl: './item-output.component.html',
  styleUrls: ['./item-output.component.css']
})
export class ItemOutputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Output()
  newItemOutput = new EventEmitter<string>();

  addNewItem(item:string) {
    this.newItemOutput.emit(item);
  }

}
