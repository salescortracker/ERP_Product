import { TestBed } from '@angular/core/testing';

import { PosDashBoardService } from './pos-dash-board.service';

describe('PosDashBoardService', () => {
  let service: PosDashBoardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosDashBoardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
