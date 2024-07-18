import { TestBed } from '@angular/core/testing';

import { HrdEmployeesService } from './hrd-employees.service';

describe('HrdEmployeesService', () => {
  let service: HrdEmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrdEmployeesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
