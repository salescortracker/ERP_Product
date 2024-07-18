import { TestBed } from '@angular/core/testing';

import { MaiEquipKeyReportsService } from './mai-equip-key-reports.service';

describe('MaiEquipKeyReportsService', () => {
  let service: MaiEquipKeyReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaiEquipKeyReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
