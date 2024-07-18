import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepOrderManagementEnquiriesExpiredComponent } from './pur-rep-order-management-enquiries-expired.component';

describe('PurRepOrderManagementEnquiriesExpiredComponent', () => {
  let component: PurRepOrderManagementEnquiriesExpiredComponent;
  let fixture: ComponentFixture<PurRepOrderManagementEnquiriesExpiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepOrderManagementEnquiriesExpiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepOrderManagementEnquiriesExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
