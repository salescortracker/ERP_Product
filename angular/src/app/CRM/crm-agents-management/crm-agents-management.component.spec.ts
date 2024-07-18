import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmAgentsManagementComponent } from './crm-agents-management.component';

describe('CrmAgentsManagementComponent', () => {
  let component: CrmAgentsManagementComponent;
  let fixture: ComponentFixture<CrmAgentsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmAgentsManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmAgentsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
