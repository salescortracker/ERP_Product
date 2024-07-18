import { TestBed } from '@angular/core/testing';

import { PosClssyBillingService } from './pos-clssy-billing.service';

describe('PosClssyBillingService', () => {
  let service: PosClssyBillingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosClssyBillingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
