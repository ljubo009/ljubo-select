import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LjuboSelectComponent } from './ljubo-select.component';

describe('LjuboSelectComponent', () => {
  let component: LjuboSelectComponent;
  let fixture: ComponentFixture<LjuboSelectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LjuboSelectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LjuboSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
