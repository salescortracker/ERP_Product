import { TestBed } from '@angular/core/testing';

import { InvUMService } from './inv-um.service';

describe('InvUMService', () => {
  let service: InvUMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvUMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
