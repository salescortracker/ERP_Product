import { TestBed } from '@angular/core/testing';

import { CrmSaleReturnsService } from './crm-sale-returns.service';

describe('CrmSaleReturnsService', () => {
  let service: CrmSaleReturnsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmSaleReturnsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
