import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepOrderManagementEnquiriesPendingComponent } from './pur-rep-order-management-enquiries-pending.component';

describe('PurRepOrderManagementEnquiriesPendingComponent', () => {
  let component: PurRepOrderManagementEnquiriesPendingComponent;
  let fixture: ComponentFixture<PurRepOrderManagementEnquiriesPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepOrderManagementEnquiriesPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepOrderManagementEnquiriesPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
