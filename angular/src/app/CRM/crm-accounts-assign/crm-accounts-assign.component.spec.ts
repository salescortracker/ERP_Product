import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmAccountsAssignComponent } from './crm-accounts-assign.component';

describe('CrmAccountsAssignComponent', () => {
  let component: CrmAccountsAssignComponent;
  let fixture: ComponentFixture<CrmAccountsAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmAccountsAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmAccountsAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
