import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvOpeningStocksComponent } from './inv-opening-stocks.component';

describe('InvOpeningStocksComponent', () => {
  let component: InvOpeningStocksComponent;
  let fixture: ComponentFixture<InvOpeningStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvOpeningStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvOpeningStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
