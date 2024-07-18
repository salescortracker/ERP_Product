import { TestBed } from '@angular/core/testing';

import { SalDispatchesService } from './sal-dispatches.service';

describe('SalDispatchesService', () => {
  let service: SalDispatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalDispatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
