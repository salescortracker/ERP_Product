import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmKeyRepCustomerGroupsComponent } from './crm-key-rep-customer-groups.component';

describe('CrmKeyRepCustomerGroupsComponent', () => {
  let component: CrmKeyRepCustomerGroupsComponent;
  let fixture: ComponentFixture<CrmKeyRepCustomerGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmKeyRepCustomerGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmKeyRepCustomerGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
