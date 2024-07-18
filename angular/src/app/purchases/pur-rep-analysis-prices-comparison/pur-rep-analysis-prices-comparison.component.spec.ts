import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepAnalysisPricesComparisonComponent } from './pur-rep-analysis-prices-comparison.component';

describe('PurRepAnalysisPricesComparisonComponent', () => {
  let component: PurRepAnalysisPricesComparisonComponent;
  let fixture: ComponentFixture<PurRepAnalysisPricesComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepAnalysisPricesComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepAnalysisPricesComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
