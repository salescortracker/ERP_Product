import { TestBed } from '@angular/core/testing';

import { PpcBatchPlanningService } from './ppc-batch-planning.service';

describe('PpcBatchPlanningService', () => {
  let service: PpcBatchPlanningService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PpcBatchPlanningService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
