import { TestBed } from '@angular/core/testing';

import { CrmRepPostSalesService } from './crm-rep-post-sales.service';

describe('CrmRepPostSalesService', () => {
  let service: CrmRepPostSalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmRepPostSalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
