import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalRepCustomerWiseConsolidatedComponent } from './sal-rep-customer-wise-consolidated.component';

describe('SalRepCustomerWiseConsolidatedComponent', () => {
  let component: SalRepCustomerWiseConsolidatedComponent;
  let fixture: ComponentFixture<SalRepCustomerWiseConsolidatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalRepCustomerWiseConsolidatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalRepCustomerWiseConsolidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
