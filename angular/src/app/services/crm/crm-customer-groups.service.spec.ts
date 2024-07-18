import { TestBed } from '@angular/core/testing';

import { CrmCustomerGroupsService } from './crm-customer-groups.service';

describe('CrmCustomerGroupsService', () => {
  let service: CrmCustomerGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmCustomerGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
