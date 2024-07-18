import { TestBed } from '@angular/core/testing';

import { FoMenuService } from './fo-menu.service';

describe('FoMenuService', () => {
  let service: FoMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
