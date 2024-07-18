import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUsineComponent } from './dashboard-usine.component';

describe('DashboardUsineComponent', () => {
  let component: DashboardUsineComponent;
  let fixture: ComponentFixture<DashboardUsineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardUsineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardUsineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
