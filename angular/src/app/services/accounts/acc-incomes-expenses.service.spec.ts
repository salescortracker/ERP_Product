import { TestBed } from '@angular/core/testing';

import { AccIncomesExpensesService } from './acc-incomes-expenses.service';

describe('AccIncomesExpensesService', () => {
  let service: AccIncomesExpensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccIncomesExpensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
