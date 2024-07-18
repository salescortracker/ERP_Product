import { TestBed } from '@angular/core/testing';

import { AccAccountsService } from './acc-accounts.service';

describe('AccAccountsService', () => {
  let service: AccAccountsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccAccountsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
