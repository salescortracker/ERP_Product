import { TestBed } from '@angular/core/testing';

import { HrdAppoinementsService } from './hrd-appoinements.service';

describe('HrdAppoinementsService', () => {
  let service: HrdAppoinementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrdAppoinementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
