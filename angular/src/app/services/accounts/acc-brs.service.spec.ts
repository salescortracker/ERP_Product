import { TestBed } from '@angular/core/testing';

import { AccBRSService } from './acc-brs.service';

describe('AccBRSService', () => {
  let service: AccBRSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccBRSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
