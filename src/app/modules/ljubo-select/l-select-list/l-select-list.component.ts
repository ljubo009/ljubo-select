import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'l-select-list',
  templateUrl: './l-select-list.component.html',
  styleUrls: ['./l-select-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LSelectListComponent implements OnInit {
  itemList;
  @Output() selectItem = new EventEmitter();
  @Input()
  get items() {
    return this.itemList;
  }
  set items(list) {
    this.itemList = list;
  }
  constructor() { }

  ngOnInit() {
  }
  selItem(data) {
    this.selectItem.emit(data);
  }
}
