import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalRepConsolidatedSalesComponent } from './sal-rep-consolidated-sales.component';

describe('SalRepConsolidatedSalesComponent', () => {
  let component: SalRepConsolidatedSalesComponent;
  let fixture: ComponentFixture<SalRepConsolidatedSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalRepConsolidatedSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalRepConsolidatedSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
