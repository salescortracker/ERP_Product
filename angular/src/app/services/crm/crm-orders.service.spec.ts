import { TestBed } from '@angular/core/testing';

import { CrmOrdersService } from './crm-orders.service';

describe('CrmOrdersService', () => {
  let service: CrmOrdersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmOrdersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
