import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalTaxesDetailsComponent } from './sal-taxes-details.component';

describe('SalTaxesDetailsComponent', () => {
  let component: SalTaxesDetailsComponent;
  let fixture: ComponentFixture<SalTaxesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalTaxesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalTaxesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
