import { TestBed } from '@angular/core/testing';

import { BlaMastersService } from './bla-masters.service';

describe('BlaMastersService', () => {
  let service: BlaMastersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlaMastersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
