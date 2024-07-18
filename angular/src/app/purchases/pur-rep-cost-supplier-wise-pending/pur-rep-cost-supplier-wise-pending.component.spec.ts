import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepCostSupplierWisePendingComponent } from './pur-rep-cost-supplier-wise-pending.component';

describe('PurRepCostSupplierWisePendingComponent', () => {
  let component: PurRepCostSupplierWisePendingComponent;
  let fixture: ComponentFixture<PurRepCostSupplierWisePendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepCostSupplierWisePendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepCostSupplierWisePendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
