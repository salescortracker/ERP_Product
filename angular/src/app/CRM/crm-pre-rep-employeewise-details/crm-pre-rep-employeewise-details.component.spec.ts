import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPreRepEmployeewiseDetailsComponent } from './crm-pre-rep-employeewise-details.component';

describe('CrmPreRepEmployeewiseDetailsComponent', () => {
  let component: CrmPreRepEmployeewiseDetailsComponent;
  let fixture: ComponentFixture<CrmPreRepEmployeewiseDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPreRepEmployeewiseDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPreRepEmployeewiseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
