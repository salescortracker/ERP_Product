import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccOpeningBalancesComponent } from './acc-opening-balances.component';

describe('AccOpeningBalancesComponent', () => {
  let component: AccOpeningBalancesComponent;
  let fixture: ComponentFixture<AccOpeningBalancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccOpeningBalancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccOpeningBalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
