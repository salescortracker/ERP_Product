import { TestBed } from '@angular/core/testing';

import { AdminGeneralInfoService } from './admin-general-info.service';

describe('AdminGeneralInfoService', () => {
  let service: AdminGeneralInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminGeneralInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
