import { TestBed } from '@angular/core/testing';

import { VentureMastersService } from './venture-masters.service';

describe('VentureMastersService', () => {
  let service: VentureMastersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VentureMastersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
