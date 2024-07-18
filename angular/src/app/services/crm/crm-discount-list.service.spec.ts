import { TestBed } from '@angular/core/testing';

import { CrmDiscountListService } from './crm-discount-list.service';

describe('CrmDiscountListService', () => {
  let service: CrmDiscountListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmDiscountListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
