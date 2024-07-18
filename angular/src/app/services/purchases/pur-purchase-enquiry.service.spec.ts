import { TestBed } from '@angular/core/testing';

import { PurPurchaseEnquiryService } from './pur-purchase-enquiry.service';

describe('PurPurchaseEnquiryService', () => {
  let service: PurPurchaseEnquiryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurPurchaseEnquiryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
