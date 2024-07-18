import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPurchaseRequestsComponent } from './pur-purchase-requests.component';

describe('PurPurchaseRequestsComponent', () => {
  let component: PurPurchaseRequestsComponent;
  let fixture: ComponentFixture<PurPurchaseRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurPurchaseRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurPurchaseRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
