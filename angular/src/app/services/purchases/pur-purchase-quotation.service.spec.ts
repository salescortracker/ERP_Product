import { TestBed } from '@angular/core/testing';

import { PurPurchaseQuotationService } from './pur-purchase-quotation.service';

describe('PurPurchaseQuotationService', () => {
  let service: PurPurchaseQuotationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurPurchaseQuotationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
