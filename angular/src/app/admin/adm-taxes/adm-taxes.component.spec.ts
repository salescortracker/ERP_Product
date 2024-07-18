import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmTaxesComponent } from './adm-taxes.component';

describe('AdmTaxesComponent', () => {
  let component: AdmTaxesComponent;
  let fixture: ComponentFixture<AdmTaxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmTaxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmTaxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
