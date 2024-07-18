import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalRepDetailedSalesComponent } from './sal-rep-detailed-sales.component';

describe('SalRepDetailedSalesComponent', () => {
  let component: SalRepDetailedSalesComponent;
  let fixture: ComponentFixture<SalRepDetailedSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalRepDetailedSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalRepDetailedSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
