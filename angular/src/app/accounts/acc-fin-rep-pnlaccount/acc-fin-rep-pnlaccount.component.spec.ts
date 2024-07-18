import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccFinRepPNLAccountComponent } from './acc-fin-rep-pnlaccount.component';

describe('AccFinRepPNLAccountComponent', () => {
  let component: AccFinRepPNLAccountComponent;
  let fixture: ComponentFixture<AccFinRepPNLAccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccFinRepPNLAccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccFinRepPNLAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
