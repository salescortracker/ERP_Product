import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdDashBoardComponent } from './hrd-dash-board.component';

describe('HrdDashBoardComponent', () => {
  let component: HrdDashBoardComponent;
  let fixture: ComponentFixture<HrdDashBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdDashBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdDashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
