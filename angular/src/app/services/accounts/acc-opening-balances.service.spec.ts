import { TestBed } from '@angular/core/testing';

import { AccOpeningBalancesService } from './acc-opening-balances.service';

describe('AccOpeningBalancesService', () => {
  let service: AccOpeningBalancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccOpeningBalancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
