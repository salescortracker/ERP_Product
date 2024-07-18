import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardDhanwantariComponent } from './dash-board-dhanwantari.component';

describe('DashBoardDhanwantariComponent', () => {
  let component: DashBoardDhanwantariComponent;
  let fixture: ComponentFixture<DashBoardDhanwantariComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoardDhanwantariComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardDhanwantariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
