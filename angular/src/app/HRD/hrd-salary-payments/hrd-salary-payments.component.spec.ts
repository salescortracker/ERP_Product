import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdSalaryPaymentsComponent } from './hrd-salary-payments.component';

describe('HrdSalaryPaymentsComponent', () => {
  let component: HrdSalaryPaymentsComponent;
  let fixture: ComponentFixture<HrdSalaryPaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdSalaryPaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdSalaryPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
