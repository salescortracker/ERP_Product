import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccFinRepAgingPayablesComponent } from './acc-fin-rep-aging-payables.component';

describe('AccFinRepAgingPayablesComponent', () => {
  let component: AccFinRepAgingPayablesComponent;
  let fixture: ComponentFixture<AccFinRepAgingPayablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccFinRepAgingPayablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccFinRepAgingPayablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
