import { TestBed } from '@angular/core/testing';

import { MaiEquipDetailsService } from './mai-equip-details.service';

describe('MaiEquipDetailsService', () => {
  let service: MaiEquipDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaiEquipDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
