import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmLeadsManagementComponent } from './crm-leads-management.component';

describe('CrmLeadsManagementComponent', () => {
  let component: CrmLeadsManagementComponent;
  let fixture: ComponentFixture<CrmLeadsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmLeadsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmLeadsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
