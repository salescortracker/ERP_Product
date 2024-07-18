import { TestBed } from '@angular/core/testing';

import { CrmTelecallingService } from './crm-telecalling.service';

describe('CrmTelecallingService', () => {
  let service: CrmTelecallingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmTelecallingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
