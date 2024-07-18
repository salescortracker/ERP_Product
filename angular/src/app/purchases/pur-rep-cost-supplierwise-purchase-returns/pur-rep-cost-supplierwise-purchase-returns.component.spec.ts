import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepCostSupplierwisePurchaseReturnsComponent } from './pur-rep-cost-supplierwise-purchase-returns.component';

describe('PurRepCostSupplierwisePurchaseReturnsComponent', () => {
  let component: PurRepCostSupplierwisePurchaseReturnsComponent;
  let fixture: ComponentFixture<PurRepCostSupplierwisePurchaseReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepCostSupplierwisePurchaseReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepCostSupplierwisePurchaseReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
