import { TestBed } from '@angular/core/testing';

import { InvKeyReportsService } from './inv-key-reports.service';

describe('InvKeyReportsService', () => {
  let service: InvKeyReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvKeyReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
