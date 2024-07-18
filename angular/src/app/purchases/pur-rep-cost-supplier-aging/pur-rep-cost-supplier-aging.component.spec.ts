import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepCostSupplierAgingComponent } from './pur-rep-cost-supplier-aging.component';

describe('PurRepCostSupplierAgingComponent', () => {
  let component: PurRepCostSupplierAgingComponent;
  let fixture: ComponentFixture<PurRepCostSupplierAgingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepCostSupplierAgingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepCostSupplierAgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
