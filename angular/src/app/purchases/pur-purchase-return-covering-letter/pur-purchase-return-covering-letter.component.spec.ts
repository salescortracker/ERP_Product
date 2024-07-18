import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPurchaseReturnCoveringLetterComponent } from './pur-purchase-return-covering-letter.component';

describe('PurPurchaseReturnCoveringLetterComponent', () => {
  let component: PurPurchaseReturnCoveringLetterComponent;
  let fixture: ComponentFixture<PurPurchaseReturnCoveringLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurPurchaseReturnCoveringLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurPurchaseReturnCoveringLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
