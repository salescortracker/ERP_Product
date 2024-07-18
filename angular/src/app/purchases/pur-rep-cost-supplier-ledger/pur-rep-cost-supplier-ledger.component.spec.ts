import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepCostSupplierLedgerComponent } from './pur-rep-cost-supplier-ledger.component';

describe('PurRepCostSupplierLedgerComponent', () => {
  let component: PurRepCostSupplierLedgerComponent;
  let fixture: ComponentFixture<PurRepCostSupplierLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepCostSupplierLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepCostSupplierLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
