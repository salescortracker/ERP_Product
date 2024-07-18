import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalRepListOfSalesComponent } from './sal-rep-list-of-sales.component';

describe('SalRepListOfSalesComponent', () => {
  let component: SalRepListOfSalesComponent;
  let fixture: ComponentFixture<SalRepListOfSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalRepListOfSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalRepListOfSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
