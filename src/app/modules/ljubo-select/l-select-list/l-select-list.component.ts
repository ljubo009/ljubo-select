import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'l-select-list',
  templateUrl: './l-select-list.component.html',
  styleUrls: ['./l-select-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LSelectListComponent implements OnInit {
  itemList;
  searchData = "";
  @Output() selectItem = new EventEmitter();
  @Output() searchFilterChange = new EventEmitter();
  @Input() searchProperties: any;
  @Input()
  get searchFilter() {
    return this.searchData;
  }
  set searchFilter(val) {
    this.searchData = val;
    this.searchFilterChange.emit(val);
  }
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
