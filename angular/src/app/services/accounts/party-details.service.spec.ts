import { TestBed } from '@angular/core/testing';

import { PartyDetailsService } from './party-details.service';

describe('PartyDetailsService', () => {
  let service: PartyDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartyDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
