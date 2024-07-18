import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepStockNoPurchasesComponent } from './pur-rep-stock-no-purchases.component';

describe('PurRepStockNoPurchasesComponent', () => {
  let component: PurRepStockNoPurchasesComponent;
  let fixture: ComponentFixture<PurRepStockNoPurchasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepStockNoPurchasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepStockNoPurchasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
