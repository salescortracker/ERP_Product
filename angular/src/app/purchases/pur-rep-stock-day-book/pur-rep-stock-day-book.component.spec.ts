import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepStockDayBookComponent } from './pur-rep-stock-day-book.component';

describe('PurRepStockDayBookComponent', () => {
  let component: PurRepStockDayBookComponent;
  let fixture: ComponentFixture<PurRepStockDayBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepStockDayBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepStockDayBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
