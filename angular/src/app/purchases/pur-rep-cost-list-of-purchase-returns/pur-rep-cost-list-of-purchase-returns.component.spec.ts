import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepCostListOfPurchaseReturnsComponent } from './pur-rep-cost-list-of-purchase-returns.component';

describe('PurRepCostListOfPurchaseReturnsComponent', () => {
  let component: PurRepCostListOfPurchaseReturnsComponent;
  let fixture: ComponentFixture<PurRepCostListOfPurchaseReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepCostListOfPurchaseReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepCostListOfPurchaseReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
