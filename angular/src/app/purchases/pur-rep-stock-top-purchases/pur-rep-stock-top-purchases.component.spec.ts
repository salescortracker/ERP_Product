import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepStockTopPurchasesComponent } from './pur-rep-stock-top-purchases.component';

describe('PurRepStockTopPurchasesComponent', () => {
  let component: PurRepStockTopPurchasesComponent;
  let fixture: ComponentFixture<PurRepStockTopPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepStockTopPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepStockTopPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
