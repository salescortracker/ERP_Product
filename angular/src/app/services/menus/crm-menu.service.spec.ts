import { TestBed } from '@angular/core/testing';

import { CrmMenuService } from './crm-menu.service';

describe('CrmMenuService', () => {
  let service: CrmMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
