import { TestBed } from '@angular/core/testing';

import { HrdKeyRepsService } from './hrd-key-reps.service';

describe('HrdKeyRepsService', () => {
  let service: HrdKeyRepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrdKeyRepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
