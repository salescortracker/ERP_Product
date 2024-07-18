import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismDashboardComponent } from './prism-dashboard.component';

describe('PrismDashboardComponent', () => {
  let component: PrismDashboardComponent;
  let fixture: ComponentFixture<PrismDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrismDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
