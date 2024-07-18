import { TestBed } from '@angular/core/testing';

import { InvPurchasesService } from './inv-purchases.service';

describe('InvPurchasesService', () => {
  let service: InvPurchasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvPurchasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
