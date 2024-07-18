import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepCostConsolidatedPurchaseReturnsComponent } from './pur-rep-cost-consolidated-purchase-returns.component';

describe('PurRepCostConsolidatedPurchaseReturnsComponent', () => {
  let component: PurRepCostConsolidatedPurchaseReturnsComponent;
  let fixture: ComponentFixture<PurRepCostConsolidatedPurchaseReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepCostConsolidatedPurchaseReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepCostConsolidatedPurchaseReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
