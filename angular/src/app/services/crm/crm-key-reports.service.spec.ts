import { TestBed } from '@angular/core/testing';

import { CrmKeyReportsService } from './crm-key-reports.service';

describe('CrmKeyReportsService', () => {
  let service: CrmKeyReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmKeyReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
