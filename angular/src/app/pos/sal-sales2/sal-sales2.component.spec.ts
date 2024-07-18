import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalSales2Component } from './sal-sales2.component';

describe('SalSales2Component', () => {
  let component: SalSales2Component;
  let fixture: ComponentFixture<SalSales2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalSales2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalSales2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
