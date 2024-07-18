import { TestBed } from '@angular/core/testing';

import { PrismRegisterService } from './prism-register.service';

describe('PrismRegisterService', () => {
  let service: PrismRegisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrismRegisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
