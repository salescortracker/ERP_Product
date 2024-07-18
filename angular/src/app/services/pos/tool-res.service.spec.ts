import { TestBed } from '@angular/core/testing';

import { ToolResService } from './tool-res.service';

describe('ToolResService', () => {
  let service: ToolResService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolResService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
