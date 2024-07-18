import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPurchaseOrders1Component } from './pur-purchase-orders1.component';

describe('PurPurchaseOrders1Component', () => {
  let component: PurPurchaseOrders1Component;
  let fixture: ComponentFixture<PurPurchaseOrders1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurPurchaseOrders1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurPurchaseOrders1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
