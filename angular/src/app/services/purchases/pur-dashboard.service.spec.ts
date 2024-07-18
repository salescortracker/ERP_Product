import { TestBed } from '@angular/core/testing';

import { PurDashboardService } from './pur-dashboard.service';

describe('PurDashboardService', () => {
  let service: PurDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
