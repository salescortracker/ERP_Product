import { TestBed } from '@angular/core/testing';

import { CrmTempService } from './crm-temp.service';

describe('CrmTempService', () => {
  let service: CrmTempService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmTempService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
