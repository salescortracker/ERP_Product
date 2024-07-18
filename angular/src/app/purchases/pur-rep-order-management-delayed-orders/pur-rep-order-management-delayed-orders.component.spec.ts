import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepOrderManagementDelayedOrdersComponent } from './pur-rep-order-management-delayed-orders.component';

describe('PurRepOrderManagementDelayedOrdersComponent', () => {
  let component: PurRepOrderManagementDelayedOrdersComponent;
  let fixture: ComponentFixture<PurRepOrderManagementDelayedOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepOrderManagementDelayedOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepOrderManagementDelayedOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
