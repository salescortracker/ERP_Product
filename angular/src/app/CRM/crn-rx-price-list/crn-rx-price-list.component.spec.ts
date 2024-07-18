import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrnRxPriceListComponent } from './crn-rx-price-list.component';

describe('CrnRxPriceListComponent', () => {
  let component: CrnRxPriceListComponent;
  let fixture: ComponentFixture<CrnRxPriceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrnRxPriceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrnRxPriceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
