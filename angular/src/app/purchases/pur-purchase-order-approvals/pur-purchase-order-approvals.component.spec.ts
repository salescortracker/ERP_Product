import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPurchaseOrderApprovalsComponent } from './pur-purchase-order-approvals.component';

describe('PurPurchaseOrderApprovalsComponent', () => {
  let component: PurPurchaseOrderApprovalsComponent;
  let fixture: ComponentFixture<PurPurchaseOrderApprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurPurchaseOrderApprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurPurchaseOrderApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
