import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPurchaseCreditNotesComponent } from './pur-purchase-credit-notes.component';

describe('PurPurchaseCreditNotesComponent', () => {
  let component: PurPurchaseCreditNotesComponent;
  let fixture: ComponentFixture<PurPurchaseCreditNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurPurchaseCreditNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurPurchaseCreditNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
