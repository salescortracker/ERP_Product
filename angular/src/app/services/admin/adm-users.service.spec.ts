import { TestBed } from '@angular/core/testing';

import { AdmUsersService } from './adm-users.service';

describe('AdmUsersService', () => {
  let service: AdmUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
