import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalSalesComponent } from './sal-sales.component';

describe('SalSalesComponent', () => {
  let component: SalSalesComponent;
  let fixture: ComponentFixture<SalSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
