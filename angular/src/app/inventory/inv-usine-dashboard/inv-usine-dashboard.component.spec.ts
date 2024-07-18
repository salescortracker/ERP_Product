import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvUsineDashboardComponent } from './inv-usine-dashboard.component';

describe('InvUsineDashboardComponent', () => {
  let component: InvUsineDashboardComponent;
  let fixture: ComponentFixture<InvUsineDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvUsineDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvUsineDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
