import { TestBed } from '@angular/core/testing';

import { PurRepStocksService } from './pur-rep-stocks.service';

describe('PurRepStocksService', () => {
  let service: PurRepStocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurRepStocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
