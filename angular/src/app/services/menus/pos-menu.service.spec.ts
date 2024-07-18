import { TestBed } from '@angular/core/testing';

import { PosMenuService } from './pos-menu.service';

describe('PosMenuService', () => {
  let service: PosMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
