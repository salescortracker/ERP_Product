import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepOrderManagementSupplierWiseOrdersComponent } from './pur-rep-order-management-supplier-wise-orders.component';

describe('PurRepOrderManagementSupplierWiseOrdersComponent', () => {
  let component: PurRepOrderManagementSupplierWiseOrdersComponent;
  let fixture: ComponentFixture<PurRepOrderManagementSupplierWiseOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepOrderManagementSupplierWiseOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepOrderManagementSupplierWiseOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
