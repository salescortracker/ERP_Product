import { TestBed } from '@angular/core/testing';

import { ResNCDepartmentsService } from './res-ncdepartments.service';

describe('ResNCDepartmentsService', () => {
  let service: ResNCDepartmentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResNCDepartmentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
