import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasesLayoutComponent } from './purchases-layout.component';

describe('PurchasesLayoutComponent', () => {
  let component: PurchasesLayoutComponent;
  let fixture: ComponentFixture<PurchasesLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasesLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasesLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
