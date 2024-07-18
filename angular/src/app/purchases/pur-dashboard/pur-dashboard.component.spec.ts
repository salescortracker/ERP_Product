import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurDashboardComponent } from './pur-dashboard.component';

describe('PurDashboardComponent', () => {
  let component: PurDashboardComponent;
  let fixture: ComponentFixture<PurDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
