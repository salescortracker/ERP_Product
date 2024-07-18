import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardRealComponent } from './dashboard-real.component';

describe('DashboardRealComponent', () => {
  let component: DashboardRealComponent;
  let fixture: ComponentFixture<DashboardRealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardRealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
