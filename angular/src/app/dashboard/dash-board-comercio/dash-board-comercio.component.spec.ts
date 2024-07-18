import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashBoardComercioComponent } from './dash-board-comercio.component';

describe('DashBoardComercioComponent', () => {
  let component: DashBoardComercioComponent;
  let fixture: ComponentFixture<DashBoardComercioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashBoardComercioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashBoardComercioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
