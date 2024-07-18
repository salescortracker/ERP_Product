import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPurchaseEnquiriesApprovalsComponent } from './pur-purchase-enquiries-approvals.component';

describe('PurPurchaseEnquiriesApprovalsComponent', () => {
  let component: PurPurchaseEnquiriesApprovalsComponent;
  let fixture: ComponentFixture<PurPurchaseEnquiriesApprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurPurchaseEnquiriesApprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurPurchaseEnquiriesApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
