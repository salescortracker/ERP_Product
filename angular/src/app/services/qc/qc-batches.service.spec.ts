import { TestBed } from '@angular/core/testing';

import { QcBatchesService } from './qc-batches.service';

describe('QcBatchesService', () => {
  let service: QcBatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QcBatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
