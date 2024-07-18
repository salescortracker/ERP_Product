import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmCustomerGroupsComponent } from './crm-customer-groups.component';

describe('CrmCustomerGroupsComponent', () => {
  let component: CrmCustomerGroupsComponent;
  let fixture: ComponentFixture<CrmCustomerGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmCustomerGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmCustomerGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
