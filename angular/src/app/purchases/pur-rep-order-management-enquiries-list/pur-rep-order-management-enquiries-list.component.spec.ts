import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepOrderManagementEnquiriesListComponent } from './pur-rep-order-management-enquiries-list.component';

describe('PurRepOrderManagementEnquiriesListComponent', () => {
  let component: PurRepOrderManagementEnquiriesListComponent;
  let fixture: ComponentFixture<PurRepOrderManagementEnquiriesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepOrderManagementEnquiriesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepOrderManagementEnquiriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
