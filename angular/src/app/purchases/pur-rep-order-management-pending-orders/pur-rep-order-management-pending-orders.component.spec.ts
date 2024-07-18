import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepOrderManagementPendingOrdersComponent } from './pur-rep-order-management-pending-orders.component';

describe('PurRepOrderManagementPendingOrdersComponent', () => {
  let component: PurRepOrderManagementPendingOrdersComponent;
  let fixture: ComponentFixture<PurRepOrderManagementPendingOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepOrderManagementPendingOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepOrderManagementPendingOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
