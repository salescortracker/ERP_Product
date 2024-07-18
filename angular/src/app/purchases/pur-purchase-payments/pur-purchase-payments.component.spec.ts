import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPurchasePaymentsComponent } from './pur-purchase-payments.component';

describe('PurPurchasePaymentsComponent', () => {
  let component: PurPurchasePaymentsComponent;
  let fixture: ComponentFixture<PurPurchasePaymentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurPurchasePaymentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurPurchasePaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
