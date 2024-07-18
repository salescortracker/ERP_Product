import { TestBed } from '@angular/core/testing';

import { PurRepPurchasesService } from './pur-rep-purchases.service';

describe('PurRepPurchasesService', () => {
  let service: PurRepPurchasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurRepPurchasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
