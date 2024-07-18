import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccFinRepBalanceSheetComponent } from './acc-fin-rep-balance-sheet.component';

describe('AccFinRepBalanceSheetComponent', () => {
  let component: AccFinRepBalanceSheetComponent;
  let fixture: ComponentFixture<AccFinRepBalanceSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccFinRepBalanceSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccFinRepBalanceSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
