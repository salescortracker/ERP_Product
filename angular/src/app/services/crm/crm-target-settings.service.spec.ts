import { TestBed } from '@angular/core/testing';

import { CrmTargetSettingsService } from './crm-target-settings.service';

describe('CrmTargetSettingsService', () => {
  let service: CrmTargetSettingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrmTargetSettingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
