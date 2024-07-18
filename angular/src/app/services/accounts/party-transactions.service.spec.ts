import { TestBed } from '@angular/core/testing';

import { PartyTransactionsService } from './party-transactions.service';

describe('PartyTransactionsService', () => {
  let service: PartyTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartyTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
