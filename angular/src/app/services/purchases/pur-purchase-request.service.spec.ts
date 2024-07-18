import { TestBed } from '@angular/core/testing';

import { PurPurchaseRequestService } from './pur-purchase-request.service';

describe('PurPurchaseRequestService', () => {
  let service: PurPurchaseRequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurPurchaseRequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
