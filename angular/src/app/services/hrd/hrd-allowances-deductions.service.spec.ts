import { TestBed } from '@angular/core/testing';

import { HrdAllowancesDeductionsService } from './hrd-allowances-deductions.service';

describe('HrdAllowancesDeductionsService', () => {
  let service: HrdAllowancesDeductionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrdAllowancesDeductionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
