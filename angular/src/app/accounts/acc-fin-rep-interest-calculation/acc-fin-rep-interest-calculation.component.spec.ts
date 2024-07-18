import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccFinRepInterestCalculationComponent } from './acc-fin-rep-interest-calculation.component';

describe('AccFinRepInterestCalculationComponent', () => {
  let component: AccFinRepInterestCalculationComponent;
  let fixture: ComponentFixture<AccFinRepInterestCalculationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccFinRepInterestCalculationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccFinRepInterestCalculationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
