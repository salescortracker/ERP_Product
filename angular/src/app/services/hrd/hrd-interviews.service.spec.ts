import { TestBed } from '@angular/core/testing';

import { HrdInterviewsService } from './hrd-interviews.service';

describe('HrdInterviewsService', () => {
  let service: HrdInterviewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrdInterviewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
