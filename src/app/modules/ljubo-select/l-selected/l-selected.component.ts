import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'l-selected',
  templateUrl: './l-selected.component.html',
  styleUrls: ['./l-selected.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LSelectedComponent implements OnInit {
  @Input() item;
  @Input() prop;
  @Input() canClearData;
  @Output() itemChange = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('it', this.item);
  }

  clearData() {
    this.item = null;
    this.itemChange.emit(this.item);
  }

}
