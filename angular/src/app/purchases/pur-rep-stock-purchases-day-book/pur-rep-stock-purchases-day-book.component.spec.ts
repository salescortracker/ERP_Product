import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepStockPurchasesDayBookComponent } from './pur-rep-stock-purchases-day-book.component';

describe('PurRepStockPurchasesDayBookComponent', () => {
  let component: PurRepStockPurchasesDayBookComponent;
  let fixture: ComponentFixture<PurRepStockPurchasesDayBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepStockPurchasesDayBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepStockPurchasesDayBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
