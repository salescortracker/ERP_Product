import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurPricesListComponent } from './pur-prices-list.component';

describe('PurPricesListComponent', () => {
  let component: PurPricesListComponent;
  let fixture: ComponentFixture<PurPricesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurPricesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurPricesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
