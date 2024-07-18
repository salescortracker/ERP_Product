import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccFinRepBankBookComponent } from './acc-fin-rep-bank-book.component';

describe('AccFinRepBankBookComponent', () => {
  let component: AccFinRepBankBookComponent;
  let fixture: ComponentFixture<AccFinRepBankBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccFinRepBankBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccFinRepBankBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
