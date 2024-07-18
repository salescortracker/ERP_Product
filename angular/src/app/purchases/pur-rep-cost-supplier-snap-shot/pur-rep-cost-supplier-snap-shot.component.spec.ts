import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepCostSupplierSnapShotComponent } from './pur-rep-cost-supplier-snap-shot.component';

describe('PurRepCostSupplierSnapShotComponent', () => {
  let component: PurRepCostSupplierSnapShotComponent;
  let fixture: ComponentFixture<PurRepCostSupplierSnapShotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepCostSupplierSnapShotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepCostSupplierSnapShotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
