import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvMINNDashboardComponent } from './inv-minndashboard.component';

describe('InvMINNDashboardComponent', () => {
  let component: InvMINNDashboardComponent;
  let fixture: ComponentFixture<InvMINNDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvMINNDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvMINNDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
