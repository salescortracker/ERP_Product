import { TestBed } from '@angular/core/testing';

import { ProductionMenuService } from './production-menu.service';

describe('ProductionMenuService', () => {
  let service: ProductionMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductionMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
