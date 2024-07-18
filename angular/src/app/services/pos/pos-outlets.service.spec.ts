import { TestBed } from '@angular/core/testing';

import { PosOutletsService } from './pos-outlets.service';

describe('PosOutletsService', () => {
  let service: PosOutletsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosOutletsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
