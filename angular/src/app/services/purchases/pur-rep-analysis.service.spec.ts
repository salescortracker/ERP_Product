import { TestBed } from '@angular/core/testing';

import { PurRepAnalysisService } from './pur-rep-analysis.service';

describe('PurRepAnalysisService', () => {
  let service: PurRepAnalysisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurRepAnalysisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
