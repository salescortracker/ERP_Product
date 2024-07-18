import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmOpeningBalancesComponent } from './crm-opening-balances.component';

describe('CrmOpeningBalancesComponent', () => {
  let component: CrmOpeningBalancesComponent;
  let fixture: ComponentFixture<CrmOpeningBalancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmOpeningBalancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmOpeningBalancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
