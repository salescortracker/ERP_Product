import { TestBed } from '@angular/core/testing';

import { UsineMenuServiceService } from './usine-menu-service.service';

describe('UsineMenuServiceService', () => {
  let service: UsineMenuServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsineMenuServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
