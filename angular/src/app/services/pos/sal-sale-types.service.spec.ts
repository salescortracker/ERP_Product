import { TestBed } from '@angular/core/testing';

import { SalSaleTypesService } from './sal-sale-types.service';

describe('SalSaleTypesService', () => {
  let service: SalSaleTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalSaleTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
