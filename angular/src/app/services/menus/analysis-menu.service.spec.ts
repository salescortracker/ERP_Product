import { TestBed } from '@angular/core/testing';

import { AnalysisMenuService } from './analysis-menu.service';

describe('AnalysisMenuService', () => {
  let service: AnalysisMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnalysisMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
