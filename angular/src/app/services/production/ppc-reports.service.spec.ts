import { TestBed } from '@angular/core/testing';

import { PpcReportsService } from './ppc-reports.service';

describe('PpcReportsService', () => {
  let service: PpcReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PpcReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
