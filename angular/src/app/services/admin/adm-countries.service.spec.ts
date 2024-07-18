import { TestBed } from '@angular/core/testing';

import { AdmCountriesService } from './adm-countries.service';

describe('AdmCountriesService', () => {
  let service: AdmCountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdmCountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
