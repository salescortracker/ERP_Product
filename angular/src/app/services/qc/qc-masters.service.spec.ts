import { TestBed } from '@angular/core/testing';

import { QcMastersService } from './qc-masters.service';

describe('QcMastersService', () => {
  let service: QcMastersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QcMastersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
