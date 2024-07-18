import { TestBed } from '@angular/core/testing';

import { CrmPriceListService } from './crm-price-list.service';

describe('CrmPriceListService', () => {
  let service: CrmPriceListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmPriceListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
