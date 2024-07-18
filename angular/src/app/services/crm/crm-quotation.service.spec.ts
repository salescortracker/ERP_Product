import { TestBed } from '@angular/core/testing';

import { CrmQuotationService } from './crm-quotation.service';

describe('CrmQuotationService', () => {
  let service: CrmQuotationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmQuotationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
