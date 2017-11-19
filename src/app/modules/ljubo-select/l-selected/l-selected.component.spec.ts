import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LSelectedComponent } from './l-selected.component';

describe('LSelectedComponent', () => {
  let component: LSelectedComponent;
  let fixture: ComponentFixture<LSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
