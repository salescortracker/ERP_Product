import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepCostListofPurchasesSupplierWiseComponent } from './pur-rep-cost-listof-purchases-supplier-wise.component';

describe('PurRepCostListofPurchasesSupplierWiseComponent', () => {
  let component: PurRepCostListofPurchasesSupplierWiseComponent;
  let fixture: ComponentFixture<PurRepCostListofPurchasesSupplierWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepCostListofPurchasesSupplierWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepCostListofPurchasesSupplierWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
