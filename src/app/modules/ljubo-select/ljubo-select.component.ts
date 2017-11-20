import {Component, EventEmitter, Input, OnInit, Output, ViewChild, ViewEncapsulation} from '@angular/core';

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
  searchData = "";

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
  @Input() searchProperties;
  @Output() selectedChange = new EventEmitter();
  @Output() select = new EventEmitter();
  @Output() search = new EventEmitter();
  @Output() restResolve = new EventEmitter();
  @Output() remove = new EventEmitter();
  @ViewChild('lSelMain') private lSelectList;
  constructor() { }

  ngOnInit() {
    console.log('LISTA', this.list, this.selected);
    var that = this;
    document.onclick = (evt) => {
      console.log("TEST");
      that.focusSel = false;
    };
  }
  inputChangeData(evt) {
    const that = this;
    console.log('PODACI U SELECT TAGU', evt);
    if (this.dirty) {
      if (that.restData) {
        that.restData().then((res) => {
          that.list = res;
        }).catch();
      } else {

      }
      this.search.emit(() => {
        return evt;
      });
    }
    this.dirty = true;
  }
  selectData(evt) {
    var that = this;
    this.selected = evt;
    setTimeout(() => {

      that.focusSel = false;
    }, 0);
    this.lSelectList.nativeElement.blur();
    console.log('SELEKTIRANI ', this.selected);
  }
  focusEl(evt) {
    if (!this.focusSel) {
      this.focusSel = true;
    }
    this.searchData = "";
    evt.stopPropagation();
  }
  ngOnChanges (evt) {
    console.log('IZMJENA' , evt, this.list, this.selected);
  }

}
