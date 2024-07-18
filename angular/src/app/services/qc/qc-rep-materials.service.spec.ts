import { TestBed } from '@angular/core/testing';

import { QcRepMaterialsService } from './qc-rep-materials.service';

describe('QcRepMaterialsService', () => {
  let service: QcRepMaterialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QcRepMaterialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
