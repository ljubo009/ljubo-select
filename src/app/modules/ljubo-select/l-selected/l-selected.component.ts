import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-l-selected',
  templateUrl: './l-selected.component.html',
  styleUrls: ['./l-selected.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LSelectedComponent implements OnInit {
  @Input() sel;
  constructor() { }

  ngOnInit() {
  }

}
