import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPostSaleBillClearancesComponent } from './crm-post-sale-bill-clearances.component';

describe('CrmPostSaleBillClearancesComponent', () => {
  let component: CrmPostSaleBillClearancesComponent;
  let fixture: ComponentFixture<CrmPostSaleBillClearancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPostSaleBillClearancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPostSaleBillClearancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
