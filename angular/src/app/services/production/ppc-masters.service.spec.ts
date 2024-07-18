import { TestBed } from '@angular/core/testing';

import { PpcMastersService } from './ppc-masters.service';

describe('PpcMastersService', () => {
  let service: PpcMastersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PpcMastersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
