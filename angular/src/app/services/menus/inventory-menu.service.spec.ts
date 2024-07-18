import { TestBed } from '@angular/core/testing';

import { InventoryMenuService } from './inventory-menu.service';

describe('InventoryMenuService', () => {
  let service: InventoryMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
