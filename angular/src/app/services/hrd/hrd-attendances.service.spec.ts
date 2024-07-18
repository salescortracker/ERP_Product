import { TestBed } from '@angular/core/testing';

import { HrdAttendancesService } from './hrd-attendances.service';

describe('HrdAttendancesService', () => {
  let service: HrdAttendancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrdAttendancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
