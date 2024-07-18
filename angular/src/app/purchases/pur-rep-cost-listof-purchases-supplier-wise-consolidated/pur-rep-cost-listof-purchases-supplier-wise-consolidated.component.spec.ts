import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepCostListofPurchasesSupplierWiseConsolidatedComponent } from './pur-rep-cost-listof-purchases-supplier-wise-consolidated.component';

describe('PurRepCostListofPurchasesSupplierWiseConsolidatedComponent', () => {
  let component: PurRepCostListofPurchasesSupplierWiseConsolidatedComponent;
  let fixture: ComponentFixture<PurRepCostListofPurchasesSupplierWiseConsolidatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepCostListofPurchasesSupplierWiseConsolidatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepCostListofPurchasesSupplierWiseConsolidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
