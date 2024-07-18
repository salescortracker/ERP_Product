import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepStockItemwiseLedgerComponent } from './pur-rep-stock-itemwise-ledger.component';

describe('PurRepStockItemwiseLedgerComponent', () => {
  let component: PurRepStockItemwiseLedgerComponent;
  let fixture: ComponentFixture<PurRepStockItemwiseLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepStockItemwiseLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepStockItemwiseLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
