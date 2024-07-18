import { TestBed } from '@angular/core/testing';

import { InvMastersService } from './inv-masters.service';

describe('InvMastersService', () => {
  let service: InvMastersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvMastersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
