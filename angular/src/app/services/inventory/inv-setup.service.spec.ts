import { TestBed } from '@angular/core/testing';

import { InvSetupService } from './inv-setup.service';

describe('InvSetupService', () => {
  let service: InvSetupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvSetupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
