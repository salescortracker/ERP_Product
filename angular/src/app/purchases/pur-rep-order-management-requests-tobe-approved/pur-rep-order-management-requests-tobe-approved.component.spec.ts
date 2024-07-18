import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepOrderManagementRequestsTobeApprovedComponent } from './pur-rep-order-management-requests-tobe-approved.component';

describe('PurRepOrderManagementRequestsTobeApprovedComponent', () => {
  let component: PurRepOrderManagementRequestsTobeApprovedComponent;
  let fixture: ComponentFixture<PurRepOrderManagementRequestsTobeApprovedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepOrderManagementRequestsTobeApprovedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepOrderManagementRequestsTobeApprovedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
