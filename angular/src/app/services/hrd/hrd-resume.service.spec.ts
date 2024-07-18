import { TestBed } from '@angular/core/testing';

import { HrdResumeService } from './hrd-resume.service';

describe('HrdResumeService', () => {
  let service: HrdResumeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrdResumeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
