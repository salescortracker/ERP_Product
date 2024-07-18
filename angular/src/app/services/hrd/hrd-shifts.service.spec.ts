import { TestBed } from '@angular/core/testing';

import { HrdShiftsService } from './hrd-shifts.service';

describe('HrdShiftsService', () => {
  let service: HrdShiftsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrdShiftsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
