import { TestBed } from '@angular/core/testing';

import { PrismVendorsService } from './prism-vendors.service';

describe('PrismVendorsService', () => {
  let service: PrismVendorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrismVendorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
