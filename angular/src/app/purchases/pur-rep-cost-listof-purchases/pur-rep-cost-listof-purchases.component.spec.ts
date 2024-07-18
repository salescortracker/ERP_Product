import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepCostListofPurchasesComponent } from './pur-rep-cost-listof-purchases.component';

describe('PurRepCostListofPurchasesComponent', () => {
  let component: PurRepCostListofPurchasesComponent;
  let fixture: ComponentFixture<PurRepCostListofPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepCostListofPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepCostListofPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
