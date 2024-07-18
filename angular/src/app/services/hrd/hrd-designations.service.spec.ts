import { TestBed } from '@angular/core/testing';

import { HrdDesignationsService } from './hrd-designations.service';

describe('HrdDesignationsService', () => {
  let service: HrdDesignationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HrdDesignationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
