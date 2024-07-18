import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccFinRepTrialBalanceComponent } from './acc-fin-rep-trial-balance.component';

describe('AccFinRepTrialBalanceComponent', () => {
  let component: AccFinRepTrialBalanceComponent;
  let fixture: ComponentFixture<AccFinRepTrialBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccFinRepTrialBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccFinRepTrialBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
