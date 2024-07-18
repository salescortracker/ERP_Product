import { TestBed } from '@angular/core/testing';

import { StoMastersService } from './sto-masters.service';

describe('StoMastersService', () => {
  let service: StoMastersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoMastersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
