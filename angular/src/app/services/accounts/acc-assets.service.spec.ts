import { TestBed } from '@angular/core/testing';

import { AccAssetsService } from './acc-assets.service';

describe('AccAssetsService', () => {
  let service: AccAssetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccAssetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
