import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPurchaseOrderComponent } from './pur-purchase-order.component';

describe('PurPurchaseOrderComponent', () => {
  let component: PurPurchaseOrderComponent;
  let fixture: ComponentFixture<PurPurchaseOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurPurchaseOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurPurchaseOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
