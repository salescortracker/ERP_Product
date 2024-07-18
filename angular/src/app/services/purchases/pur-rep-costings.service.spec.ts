import { TestBed } from '@angular/core/testing';

import { PurRepCostingsService } from './pur-rep-costings.service';

describe('PurRepCostingsService', () => {
  let service: PurRepCostingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurRepCostingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
