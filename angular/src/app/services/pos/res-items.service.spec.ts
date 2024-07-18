import { TestBed } from '@angular/core/testing';

import { ResItemsService } from './res-items.service';

describe('ResItemsService', () => {
  let service: ResItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
