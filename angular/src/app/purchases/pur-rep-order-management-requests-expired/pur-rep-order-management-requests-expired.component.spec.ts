import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepOrderManagementRequestsExpiredComponent } from './pur-rep-order-management-requests-expired.component';

describe('PurRepOrderManagementRequestsExpiredComponent', () => {
  let component: PurRepOrderManagementRequestsExpiredComponent;
  let fixture: ComponentFixture<PurRepOrderManagementRequestsExpiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepOrderManagementRequestsExpiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepOrderManagementRequestsExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
