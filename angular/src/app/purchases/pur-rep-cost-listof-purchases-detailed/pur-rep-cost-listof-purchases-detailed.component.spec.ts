import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepCostListofPurchasesDetailedComponent } from './pur-rep-cost-listof-purchases-detailed.component';

describe('PurRepCostListofPurchasesDetailedComponent', () => {
  let component: PurRepCostListofPurchasesDetailedComponent;
  let fixture: ComponentFixture<PurRepCostListofPurchasesDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepCostListofPurchasesDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepCostListofPurchasesDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
