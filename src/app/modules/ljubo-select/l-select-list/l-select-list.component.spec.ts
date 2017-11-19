import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LSelectListComponent } from './l-select-list.component';

describe('LSelectListComponent', () => {
  let component: LSelectListComponent;
  let fixture: ComponentFixture<LSelectListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LSelectListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LSelectListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
