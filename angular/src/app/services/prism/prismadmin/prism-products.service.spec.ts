import { TestBed } from '@angular/core/testing';

import { PrismProductsService } from './prism-products.service';

describe('PrismProductsService', () => {
  let service: PrismProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrismProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
