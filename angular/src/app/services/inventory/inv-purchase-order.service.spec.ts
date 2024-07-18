import { TestBed } from '@angular/core/testing';

import { InvPurchaseOrderService } from './inv-purchase-order.service';

describe('InvPurchaseOrderService', () => {
  let service: InvPurchaseOrderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvPurchaseOrderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
