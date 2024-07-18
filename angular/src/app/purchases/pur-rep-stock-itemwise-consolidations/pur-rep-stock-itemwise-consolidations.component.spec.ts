import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepStockItemwiseConsolidationsComponent } from './pur-rep-stock-itemwise-consolidations.component';

describe('PurRepStockItemwiseConsolidationsComponent', () => {
  let component: PurRepStockItemwiseConsolidationsComponent;
  let fixture: ComponentFixture<PurRepStockItemwiseConsolidationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepStockItemwiseConsolidationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepStockItemwiseConsolidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
