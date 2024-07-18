import { TestBed } from '@angular/core/testing';

import { InvOpeningStocksService } from './inv-opening-stocks.service';

describe('InvOpeningStocksService', () => {
  let service: InvOpeningStocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvOpeningStocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
