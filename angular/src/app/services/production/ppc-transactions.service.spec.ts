import { TestBed } from '@angular/core/testing';

import { PpcTransactionsService } from './ppc-transactions.service';

describe('PpcTransactionsService', () => {
  let service: PpcTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PpcTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
