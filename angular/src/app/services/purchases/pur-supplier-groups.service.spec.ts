import { TestBed } from '@angular/core/testing';

import { PurSupplierGroupsService } from './pur-supplier-groups.service';

describe('PurSupplierGroupsService', () => {
  let service: PurSupplierGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurSupplierGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
