import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'ljubo-select',
  templateUrl: './ljubo-select.component.html',
  styleUrls: ['./ljubo-select.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LjuboSelectComponent implements OnInit {
  focusSel = false;
  dirty = false;
  selectedData: any;
  @Input() list;
  @Input()
  get selected () {
    return this.selectedData;
  }
  set selected (data) {
    this.selectedData = data;
    this.selectedChange.emit(data);
  }
  @Input()displayProperty
  @Input() canClear;
  @Input() restData;
  @Output() selectedChange = new EventEmitter();
  @Output() select = new EventEmitter();
  @Output() search = new EventEmitter();
  @Output() restResolve = new EventEmitter();
  @Output() remove = new EventEmitter();
  constructor() { }

  ngOnInit() {
    console.log('LISTA', this.list, this.selected);
  }
  inputChangeData(evt) {
    const that = this;
    console.log('PODACI U SELECT TAGU', evt);
    if (this.dirty) {
      if (that.restData) {
        that.restData().then((res) => {
          that.list = res;
        }).catch();
      }
      this.search.emit(() => {
        return evt;
      });
    }
    this.dirty = true;
  }
  selectData(evt) {
    this.selected = evt;
    this.focusSel = false;
    console.log('SELEKTIRANI ', this.selected);
  }
  ngOnChanges (evt) {
    console.log('IZMJENA' , evt, this.list, this.selected);
  }

}
