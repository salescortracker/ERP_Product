import { TestBed } from '@angular/core/testing';

import { BlaSamplesLossesService } from './bla-samples-losses.service';

describe('BlaSamplesLossesService', () => {
  let service: BlaSamplesLossesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlaSamplesLossesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
