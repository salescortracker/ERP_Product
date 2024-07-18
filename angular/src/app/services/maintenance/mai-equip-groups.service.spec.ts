import { TestBed } from '@angular/core/testing';

import { MaiEquipGroupsService } from './mai-equip-groups.service';

describe('MaiEquipGroupsService', () => {
  let service: MaiEquipGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaiEquipGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
