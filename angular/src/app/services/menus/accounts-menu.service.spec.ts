import { TestBed } from '@angular/core/testing';

import { AccountsMenuService } from './accounts-menu.service';

describe('AccountsMenuService', () => {
  let service: AccountsMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountsMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
