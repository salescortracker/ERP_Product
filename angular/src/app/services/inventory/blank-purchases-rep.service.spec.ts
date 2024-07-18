import { TestBed } from '@angular/core/testing';

import { BlankPurchasesRepService } from './blank-purchases-rep.service';

describe('BlankPurchasesRepService', () => {
  let service: BlankPurchasesRepService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlankPurchasesRepService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
