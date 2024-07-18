import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepCostPurchaseToReturnsComponent } from './pur-rep-cost-purchase-to-returns.component';

describe('PurRepCostPurchaseToReturnsComponent', () => {
  let component: PurRepCostPurchaseToReturnsComponent;
  let fixture: ComponentFixture<PurRepCostPurchaseToReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepCostPurchaseToReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepCostPurchaseToReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
