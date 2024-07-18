import { TestBed } from '@angular/core/testing';

import { PosKotGroupsService } from './pos-kot-groups.service';

describe('PosKotGroupsService', () => {
  let service: PosKotGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosKotGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
