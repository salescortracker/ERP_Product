import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccFinRepLedgersStdComponent } from './acc-fin-rep-ledgers-std.component';

describe('AccFinRepLedgersStdComponent', () => {
  let component: AccFinRepLedgersStdComponent;
  let fixture: ComponentFixture<AccFinRepLedgersStdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccFinRepLedgersStdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccFinRepLedgersStdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
