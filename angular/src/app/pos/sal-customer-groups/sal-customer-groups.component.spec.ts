import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalCustomerGroupsComponent } from './sal-customer-groups.component';

describe('SalCustomerGroupsComponent', () => {
  let component: SalCustomerGroupsComponent;
  let fixture: ComponentFixture<SalCustomerGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalCustomerGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalCustomerGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
