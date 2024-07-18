import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvStoRepClosingStocksComponent } from './inv-sto-rep-closing-stocks.component';

describe('InvStoRepClosingStocksComponent', () => {
  let component: InvStoRepClosingStocksComponent;
  let fixture: ComponentFixture<InvStoRepClosingStocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvStoRepClosingStocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvStoRepClosingStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
