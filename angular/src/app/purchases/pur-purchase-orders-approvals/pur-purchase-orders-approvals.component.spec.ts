import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPurchaseOrdersApprovalsComponent } from './pur-purchase-orders-approvals.component';

describe('PurPurchaseOrdersApprovalsComponent', () => {
  let component: PurPurchaseOrdersApprovalsComponent;
  let fixture: ComponentFixture<PurPurchaseOrdersApprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurPurchaseOrdersApprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurPurchaseOrdersApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
