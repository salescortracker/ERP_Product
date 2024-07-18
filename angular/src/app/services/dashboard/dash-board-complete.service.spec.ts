import { TestBed } from '@angular/core/testing';

import { DashBoardCompleteService } from './dash-board-complete.service';

describe('DashBoardCompleteService', () => {
  let service: DashBoardCompleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashBoardCompleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
