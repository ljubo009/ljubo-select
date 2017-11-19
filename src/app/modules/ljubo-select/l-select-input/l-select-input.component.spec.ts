import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LSelectInputComponent } from './l-select-input.component';

describe('LSelectInputComponent', () => {
  let component: LSelectInputComponent;
  let fixture: ComponentFixture<LSelectInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LSelectInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LSelectInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
