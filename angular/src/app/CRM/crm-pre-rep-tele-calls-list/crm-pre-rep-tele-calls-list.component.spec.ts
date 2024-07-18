import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPreRepTeleCallsListComponent } from './crm-pre-rep-tele-calls-list.component';

describe('CrmPreRepTeleCallsListComponent', () => {
  let component: CrmPreRepTeleCallsListComponent;
  let fixture: ComponentFixture<CrmPreRepTeleCallsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPreRepTeleCallsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPreRepTeleCallsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
