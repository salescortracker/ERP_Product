import { TestBed } from '@angular/core/testing';

import { AccTransactionsService } from './acc-transactions.service';

describe('AccTransactionsService', () => {
  let service: AccTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
