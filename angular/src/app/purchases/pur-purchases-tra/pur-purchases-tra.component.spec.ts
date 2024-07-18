import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPurchasesTraComponent } from './pur-purchases-tra.component';

describe('PurPurchasesTraComponent', () => {
  let component: PurPurchasesTraComponent;
  let fixture: ComponentFixture<PurPurchasesTraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurPurchasesTraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurPurchasesTraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
