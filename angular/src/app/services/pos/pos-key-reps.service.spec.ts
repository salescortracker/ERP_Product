import { TestBed } from '@angular/core/testing';

import { PosKeyRepsService } from './pos-key-reps.service';

describe('PosKeyRepsService', () => {
  let service: PosKeyRepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosKeyRepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
