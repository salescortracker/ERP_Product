import { TestBed } from '@angular/core/testing';

import { PurKeyRepsService } from './pur-key-reps.service';

describe('PurKeyRepsService', () => {
  let service: PurKeyRepsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurKeyRepsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
