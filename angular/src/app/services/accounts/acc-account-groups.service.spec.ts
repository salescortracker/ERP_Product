import { TestBed } from '@angular/core/testing';

import { AccAccountGroupsService } from './acc-account-groups.service';

describe('AccAccountGroupsService', () => {
  let service: AccAccountGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccAccountGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
