import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesUnauthorizeComponent } from './purchases-unauthorize.component';

describe('PurchasesUnauthorizeComponent', () => {
  let component: PurchasesUnauthorizeComponent;
  let fixture: ComponentFixture<PurchasesUnauthorizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasesUnauthorizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesUnauthorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
