import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardManageInnComponent } from './dashboard-manage-inn.component';

describe('DashboardManageInnComponent', () => {
  let component: DashboardManageInnComponent;
  let fixture: ComponentFixture<DashboardManageInnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardManageInnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardManageInnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
