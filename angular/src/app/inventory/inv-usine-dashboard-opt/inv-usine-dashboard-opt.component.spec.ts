import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvUsineDashboardOptComponent } from './inv-usine-dashboard-opt.component';

describe('InvUsineDashboardOptComponent', () => {
  let component: InvUsineDashboardOptComponent;
  let fixture: ComponentFixture<InvUsineDashboardOptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvUsineDashboardOptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvUsineDashboardOptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
