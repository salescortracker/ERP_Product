import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPostRepCustomerAgingComponent } from './crm-post-rep-customer-aging.component';

describe('CrmPostRepCustomerAgingComponent', () => {
  let component: CrmPostRepCustomerAgingComponent;
  let fixture: ComponentFixture<CrmPostRepCustomerAgingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPostRepCustomerAgingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPostRepCustomerAgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
