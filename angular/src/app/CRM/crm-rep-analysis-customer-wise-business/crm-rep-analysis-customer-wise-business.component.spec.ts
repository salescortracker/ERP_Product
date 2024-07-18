import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmRepAnalysisCustomerWiseBusinessComponent } from './crm-rep-analysis-customer-wise-business.component';

describe('CrmRepAnalysisCustomerWiseBusinessComponent', () => {
  let component: CrmRepAnalysisCustomerWiseBusinessComponent;
  let fixture: ComponentFixture<CrmRepAnalysisCustomerWiseBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmRepAnalysisCustomerWiseBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmRepAnalysisCustomerWiseBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
