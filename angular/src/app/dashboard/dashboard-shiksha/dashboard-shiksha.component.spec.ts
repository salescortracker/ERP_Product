import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardShikshaComponent } from './dashboard-shiksha.component';

describe('DashboardShikshaComponent', () => {
  let component: DashboardShikshaComponent;
  let fixture: ComponentFixture<DashboardShikshaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardShikshaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardShikshaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
