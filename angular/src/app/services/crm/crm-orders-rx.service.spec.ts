import { TestBed } from '@angular/core/testing';

import { CrmOrdersRxService } from './crm-orders-rx.service';

describe('CrmOrdersRxService', () => {
  let service: CrmOrdersRxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmOrdersRxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
