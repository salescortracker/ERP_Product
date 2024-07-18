import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccFinRepCashBookComponent } from './acc-fin-rep-cash-book.component';

describe('AccFinRepCashBookComponent', () => {
  let component: AccFinRepCashBookComponent;
  let fixture: ComponentFixture<AccFinRepCashBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccFinRepCashBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccFinRepCashBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
