import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPurchaseQuotationsComponent } from './pur-purchase-quotations.component';

describe('PurPurchaseQuotationsComponent', () => {
  let component: PurPurchaseQuotationsComponent;
  let fixture: ComponentFixture<PurPurchaseQuotationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurPurchaseQuotationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurPurchaseQuotationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
