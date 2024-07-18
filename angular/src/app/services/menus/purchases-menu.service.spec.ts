import { TestBed } from '@angular/core/testing';

import { PurchasesMenuService } from './purchases-menu.service';

describe('PurchasesMenuService', () => {
  let service: PurchasesMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchasesMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
