import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepCostListofPurchasesConsolidatedComponent } from './pur-rep-cost-listof-purchases-consolidated.component';

describe('PurRepCostListofPurchasesConsolidatedComponent', () => {
  let component: PurRepCostListofPurchasesConsolidatedComponent;
  let fixture: ComponentFixture<PurRepCostListofPurchasesConsolidatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepCostListofPurchasesConsolidatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepCostListofPurchasesConsolidatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
