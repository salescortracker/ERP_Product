import { TestBed } from '@angular/core/testing';

import { RealMastersService } from './real-masters.service';

describe('RealMastersService', () => {
  let service: RealMastersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealMastersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
