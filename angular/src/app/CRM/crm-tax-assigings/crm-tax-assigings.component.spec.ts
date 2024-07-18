import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmTaxAssigingsComponent } from './crm-tax-assigings.component';

describe('CrmTaxAssigingsComponent', () => {
  let component: CrmTaxAssigingsComponent;
  let fixture: ComponentFixture<CrmTaxAssigingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmTaxAssigingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmTaxAssigingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
