import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepStockLeastPurchasesComponent } from './pur-rep-stock-least-purchases.component';

describe('PurRepStockLeastPurchasesComponent', () => {
  let component: PurRepStockLeastPurchasesComponent;
  let fixture: ComponentFixture<PurRepStockLeastPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepStockLeastPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepStockLeastPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
