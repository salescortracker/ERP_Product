import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccFinRepLedgersDetailedComponent } from './acc-fin-rep-ledgers-detailed.component';

describe('AccFinRepLedgersDetailedComponent', () => {
  let component: AccFinRepLedgersDetailedComponent;
  let fixture: ComponentFixture<AccFinRepLedgersDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccFinRepLedgersDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccFinRepLedgersDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
