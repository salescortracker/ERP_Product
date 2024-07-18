import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPurchaseTypesComponent } from './pur-purchase-types.component';

describe('PurPurchaseTypesComponent', () => {
  let component: PurPurchaseTypesComponent;
  let fixture: ComponentFixture<PurPurchaseTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurPurchaseTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurPurchaseTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
