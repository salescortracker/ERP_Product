import { TestBed } from '@angular/core/testing';

import { CrmTaxesService } from './crm-taxes.service';

describe('CrmTaxesService', () => {
  let service: CrmTaxesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmTaxesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
