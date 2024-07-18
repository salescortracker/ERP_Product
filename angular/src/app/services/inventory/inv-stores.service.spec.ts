import { TestBed } from '@angular/core/testing';

import { InvStoresService } from './inv-stores.service';

describe('InvStoresService', () => {
  let service: InvStoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvStoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
