import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPurchaseQuotationsApprovalsComponent } from './pur-purchase-quotations-approvals.component';

describe('PurPurchaseQuotationsApprovalsComponent', () => {
  let component: PurPurchaseQuotationsApprovalsComponent;
  let fixture: ComponentFixture<PurPurchaseQuotationsApprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurPurchaseQuotationsApprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurPurchaseQuotationsApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
