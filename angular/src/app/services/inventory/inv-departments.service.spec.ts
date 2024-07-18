import { TestBed } from '@angular/core/testing';

import { InvDepartmentsService } from './inv-departments.service';

describe('InvDepartmentsService', () => {
  let service: InvDepartmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvDepartmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
