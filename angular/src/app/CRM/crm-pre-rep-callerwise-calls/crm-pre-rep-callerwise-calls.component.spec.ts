import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPreRepCallerwiseCallsComponent } from './crm-pre-rep-callerwise-calls.component';

describe('CrmPreRepCallerwiseCallsComponent', () => {
  let component: CrmPreRepCallerwiseCallsComponent;
  let fixture: ComponentFixture<CrmPreRepCallerwiseCallsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPreRepCallerwiseCallsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPreRepCallerwiseCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
