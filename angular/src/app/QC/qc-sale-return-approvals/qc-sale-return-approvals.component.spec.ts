import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcSaleReturnApprovalsComponent } from './qc-sale-return-approvals.component';

describe('QcSaleReturnApprovalsComponent', () => {
  let component: QcSaleReturnApprovalsComponent;
  let fixture: ComponentFixture<QcSaleReturnApprovalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcSaleReturnApprovalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcSaleReturnApprovalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
