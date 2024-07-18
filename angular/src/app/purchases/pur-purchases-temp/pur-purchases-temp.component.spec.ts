import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPurchasesTempComponent } from './pur-purchases-temp.component';

describe('PurPurchasesTempComponent', () => {
  let component: PurPurchasesTempComponent;
  let fixture: ComponentFixture<PurPurchasesTempComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurPurchasesTempComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurPurchasesTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
