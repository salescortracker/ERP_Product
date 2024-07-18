import { TestBed } from '@angular/core/testing';

import { AccMenuService } from './acc-menu.service';

describe('AccMenuService', () => {
  let service: AccMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
