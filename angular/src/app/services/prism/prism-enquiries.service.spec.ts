import { TestBed } from '@angular/core/testing';

import { PrismEnquiriesService } from './prism-enquiries.service';

describe('PrismEnquiriesService', () => {
  let service: PrismEnquiriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrismEnquiriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
