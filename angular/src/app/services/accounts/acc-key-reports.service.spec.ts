import { TestBed } from '@angular/core/testing';

import { AccKeyReportsService } from './acc-key-reports.service';

describe('AccKeyReportsService', () => {
  let service: AccKeyReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccKeyReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
