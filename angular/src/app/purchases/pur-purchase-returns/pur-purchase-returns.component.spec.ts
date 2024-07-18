import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPurchaseReturnsComponent } from './pur-purchase-returns.component';

describe('PurPurchaseReturnsComponent', () => {
  let component: PurPurchaseReturnsComponent;
  let fixture: ComponentFixture<PurPurchaseReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurPurchaseReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurPurchaseReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
