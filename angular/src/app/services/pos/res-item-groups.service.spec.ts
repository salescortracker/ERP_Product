import { TestBed } from '@angular/core/testing';

import { ResItemGroupsService } from './res-item-groups.service';

describe('ResItemGroupsService', () => {
  let service: ResItemGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResItemGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
