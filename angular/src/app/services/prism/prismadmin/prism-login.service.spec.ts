import { TestBed } from '@angular/core/testing';

import { PrismLoginService } from './prism-login.service';

describe('PrismLoginService', () => {
  let service: PrismLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrismLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
