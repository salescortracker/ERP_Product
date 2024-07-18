import { TestBed } from '@angular/core/testing';

import { MaintenanceMenuService } from './maintenance-menu.service';

describe('MaintenanceMenuService', () => {
  let service: MaintenanceMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaintenanceMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
