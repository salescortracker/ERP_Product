import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcDashboardComponent } from './qc-dashboard.component';

describe('QcDashboardComponent', () => {
  let component: QcDashboardComponent;
  let fixture: ComponentFixture<QcDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
