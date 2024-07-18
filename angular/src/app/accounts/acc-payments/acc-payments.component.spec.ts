import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccPaymentsComponent } from './acc-payments.component';

describe('AccPaymentsComponent', () => {
  let component: AccPaymentsComponent;
  let fixture: ComponentFixture<AccPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
