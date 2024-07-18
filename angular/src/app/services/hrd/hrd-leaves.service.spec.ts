import { TestBed } from '@angular/core/testing';

import { HrdLeavesService } from './hrd-leaves.service';

describe('HrdLeavesService', () => {
  let service: HrdLeavesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrdLeavesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
