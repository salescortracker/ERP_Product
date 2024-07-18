import { TestBed } from '@angular/core/testing';

import { PurPurchaseTypesService } from './pur-purchase-types.service';

describe('PurPurchaseTypesService', () => {
  let service: PurPurchaseTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurPurchaseTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
