import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccFinRepAgingReceivablesComponent } from './acc-fin-rep-aging-receivables.component';

describe('AccFinRepAgingReceivablesComponent', () => {
  let component: AccFinRepAgingReceivablesComponent;
  let fixture: ComponentFixture<AccFinRepAgingReceivablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccFinRepAgingReceivablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccFinRepAgingReceivablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
