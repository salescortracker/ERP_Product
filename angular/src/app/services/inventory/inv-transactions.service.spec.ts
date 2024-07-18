import { TestBed } from '@angular/core/testing';

import { InvTransactionsService } from './inv-transactions.service';

describe('InvTransactionsService', () => {
  let service: InvTransactionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvTransactionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
