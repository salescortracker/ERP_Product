import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPurchaseTermsComponent } from './pur-purchase-terms.component';

describe('PurPurchaseTermsComponent', () => {
  let component: PurPurchaseTermsComponent;
  let fixture: ComponentFixture<PurPurchaseTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurPurchaseTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurPurchaseTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
