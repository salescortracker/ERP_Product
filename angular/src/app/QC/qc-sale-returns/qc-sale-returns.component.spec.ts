import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcSaleReturnsComponent } from './qc-sale-returns.component';

describe('QcSaleReturnsComponent', () => {
  let component: QcSaleReturnsComponent;
  let fixture: ComponentFixture<QcSaleReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcSaleReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcSaleReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
