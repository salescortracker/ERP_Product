import { TestBed } from '@angular/core/testing';

import { PosItemWiseIngredientsService } from './pos-item-wise-ingredients.service';

describe('PosItemWiseIngredientsService', () => {
  let service: PosItemWiseIngredientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PosItemWiseIngredientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
