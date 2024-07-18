import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepCostSupplierDayBookComponent } from './pur-rep-cost-supplier-day-book.component';

describe('PurRepCostSupplierDayBookComponent', () => {
  let component: PurRepCostSupplierDayBookComponent;
  let fixture: ComponentFixture<PurRepCostSupplierDayBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepCostSupplierDayBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepCostSupplierDayBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
