import { TestBed } from '@angular/core/testing';

import { QcMenuService } from './qc-menu.service';

describe('QcMenuService', () => {
  let service: QcMenuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QcMenuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
