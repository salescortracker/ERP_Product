import { TestBed } from '@angular/core/testing';

import { CrmDashboardService } from './crm-dashboard.service';

describe('CrmDashboardService', () => {
  let service: CrmDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
