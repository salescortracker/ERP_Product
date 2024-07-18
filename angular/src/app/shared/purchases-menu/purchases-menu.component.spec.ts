import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesMenuComponent } from './purchases-menu.component';

describe('PurchasesMenuComponent', () => {
  let component: PurchasesMenuComponent;
  let fixture: ComponentFixture<PurchasesMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasesMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
