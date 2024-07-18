import { TestBed } from '@angular/core/testing';

import { HrdMenuService } from './hrd-menu.service';

describe('HrdMenuService', () => {
  let service: HrdMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrdMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
