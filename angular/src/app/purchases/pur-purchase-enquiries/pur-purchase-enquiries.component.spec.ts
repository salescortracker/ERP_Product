import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPurchaseEnquiriesComponent } from './pur-purchase-enquiries.component';

describe('PurPurchaseEnquiriesComponent', () => {
  let component: PurPurchaseEnquiriesComponent;
  let fixture: ComponentFixture<PurPurchaseEnquiriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurPurchaseEnquiriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurPurchaseEnquiriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
