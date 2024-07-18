import { TestBed } from '@angular/core/testing';

import { PurPurchaseReturnsService } from './pur-purchase-returns.service';

describe('PurPurchaseReturnsService', () => {
  let service: PurPurchaseReturnsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurPurchaseReturnsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
