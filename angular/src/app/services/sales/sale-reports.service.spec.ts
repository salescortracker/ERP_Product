import { TestBed } from '@angular/core/testing';

import { SaleReportsService } from './sale-reports.service';

describe('SaleReportsService', () => {
  let service: SaleReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaleReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
