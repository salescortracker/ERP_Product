import { TestBed } from '@angular/core/testing';

import { ResServicesService } from './res-services.service';

describe('ResServicesService', () => {
  let service: ResServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
