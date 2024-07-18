import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccDashBoardComponent } from './acc-dash-board.component';

describe('AccDashBoardComponent', () => {
  let component: AccDashBoardComponent;
  let fixture: ComponentFixture<AccDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
