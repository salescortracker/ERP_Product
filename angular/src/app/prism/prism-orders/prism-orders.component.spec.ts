import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismOrdersComponent } from './prism-orders.component';

describe('PrismOrdersComponent', () => {
  let component: PrismOrdersComponent;
  let fixture: ComponentFixture<PrismOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrismOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
