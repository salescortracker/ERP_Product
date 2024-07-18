import { TestBed } from '@angular/core/testing';

import { CrmBillSubmissionsService } from './crm-bill-submissions.service';

describe('CrmBillSubmissionsService', () => {
  let service: CrmBillSubmissionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmBillSubmissionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
