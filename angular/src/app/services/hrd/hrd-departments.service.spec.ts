import { TestBed } from '@angular/core/testing';

import { HrdDepartmentsService } from './hrd-departments.service';

describe('HrdDepartmentsService', () => {
  let service: HrdDepartmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrdDepartmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
