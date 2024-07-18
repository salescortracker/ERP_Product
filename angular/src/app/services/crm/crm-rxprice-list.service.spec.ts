import { TestBed } from '@angular/core/testing';

import { CrmRXPriceListService } from './crm-rxprice-list.service';

describe('CrmRXPriceListService', () => {
  let service: CrmRXPriceListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmRXPriceListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
