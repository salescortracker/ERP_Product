import { TestBed } from '@angular/core/testing';

import { PrismQuotationsService } from './prism-quotations.service';

describe('PrismQuotationsService', () => {
  let service: PrismQuotationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrismQuotationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
