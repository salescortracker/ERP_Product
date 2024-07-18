import { TestBed } from '@angular/core/testing';

import { PurSettingsService } from './pur-settings.service';

describe('PurSettingsService', () => {
  let service: PurSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
