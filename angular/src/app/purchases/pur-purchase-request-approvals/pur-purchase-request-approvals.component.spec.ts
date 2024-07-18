import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPurchaseRequestApprovalsComponent } from './pur-purchase-request-approvals.component';

describe('PurPurchaseRequestApprovalsComponent', () => {
  let component: PurPurchaseRequestApprovalsComponent;
  let fixture: ComponentFixture<PurPurchaseRequestApprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurPurchaseRequestApprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurPurchaseRequestApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
