import {Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'l-select-input',
  templateUrl: './l-select-input.component.html',
  styleUrls: ['./l-select-input.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LSelectInputComponent implements OnInit {
  inputVal = "";
  @Output() selInputOut = new EventEmitter();
  @Input()
  get selVal() {
    return this.inputVal;
  }

  set selVal(val) {
    this.inputVal = val;
    this.selInputOut.emit(this.inputVal);
  }
  constructor() { }

  ngOnInit() {
  }
  // ngOnChanges(evt) {
  //   this.inputVal = this.selVal;
  //   console.log("POSTAVI INPUT VRIJEDNOST", this.inputVal);
  // }

}
