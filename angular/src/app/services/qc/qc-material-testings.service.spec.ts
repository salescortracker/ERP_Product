import { TestBed } from '@angular/core/testing';

import { QcMaterialTestingsService } from './qc-material-testings.service';

describe('QcMaterialTestingsService', () => {
  let service: QcMaterialTestingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QcMaterialTestingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
