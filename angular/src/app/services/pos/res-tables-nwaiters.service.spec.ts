import { TestBed } from '@angular/core/testing';

import { ResTablesNWaitersService } from './res-tables-nwaiters.service';

describe('ResTablesNWaitersService', () => {
  let service: ResTablesNWaitersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResTablesNWaitersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
