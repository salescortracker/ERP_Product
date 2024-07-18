import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepOrderManagementSupplierWiseAdvancesComponent } from './pur-rep-order-management-supplier-wise-advances.component';

describe('PurRepOrderManagementSupplierWiseAdvancesComponent', () => {
  let component: PurRepOrderManagementSupplierWiseAdvancesComponent;
  let fixture: ComponentFixture<PurRepOrderManagementSupplierWiseAdvancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepOrderManagementSupplierWiseAdvancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepOrderManagementSupplierWiseAdvancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
