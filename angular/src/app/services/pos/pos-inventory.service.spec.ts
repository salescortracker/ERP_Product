import { TestBed } from '@angular/core/testing';

import { PosInventoryService } from './pos-inventory.service';

describe('PosInventoryService', () => {
  let service: PosInventoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosInventoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
