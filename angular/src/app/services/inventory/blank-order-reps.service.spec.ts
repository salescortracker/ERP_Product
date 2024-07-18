import { TestBed } from '@angular/core/testing';

import { BlankOrderRepsService } from './blank-order-reps.service';

describe('BlankOrderRepsService', () => {
  let service: BlankOrderRepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlankOrderRepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
