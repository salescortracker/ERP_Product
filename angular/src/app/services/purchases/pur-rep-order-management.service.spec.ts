import { TestBed } from '@angular/core/testing';

import { PurRepOrderManagementService } from './pur-rep-order-management.service';

describe('PurRepOrderManagementService', () => {
  let service: PurRepOrderManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurRepOrderManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
