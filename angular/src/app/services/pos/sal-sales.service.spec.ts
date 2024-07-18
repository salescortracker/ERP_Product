import { TestBed } from '@angular/core/testing';

import { SalSalesService } from './sal-sales.service';

describe('SalSalesService', () => {
  let service: SalSalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalSalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
