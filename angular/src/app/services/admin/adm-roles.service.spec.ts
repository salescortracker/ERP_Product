import { TestBed } from '@angular/core/testing';

import { AdmRolesService } from './adm-roles.service';

describe('AdmRolesService', () => {
  let service: AdmRolesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmRolesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
