import { TestBed } from '@angular/core/testing';

import { CrmPreSaleReportsService } from './crm-pre-sale-reports.service';

describe('CrmPreSaleReportsService', () => {
  let service: CrmPreSaleReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmPreSaleReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
