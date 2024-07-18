import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalSaleTypesComponent } from './sal-sale-types.component';

describe('SalSaleTypesComponent', () => {
  let component: SalSaleTypesComponent;
  let fixture: ComponentFixture<SalSaleTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalSaleTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalSaleTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
