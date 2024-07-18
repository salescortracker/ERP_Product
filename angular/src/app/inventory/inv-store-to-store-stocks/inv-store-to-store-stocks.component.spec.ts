import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvStoreToStoreStocksComponent } from './inv-store-to-store-stocks.component';

describe('InvStoreToStoreStocksComponent', () => {
  let component: InvStoreToStoreStocksComponent;
  let fixture: ComponentFixture<InvStoreToStoreStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvStoreToStoreStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvStoreToStoreStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
