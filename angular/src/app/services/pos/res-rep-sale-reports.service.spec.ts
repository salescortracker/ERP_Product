import { TestBed } from '@angular/core/testing';

import { ResRepSaleReportsService } from './res-rep-sale-reports.service';

describe('ResRepSaleReportsService', () => {
  let service: ResRepSaleReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResRepSaleReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
