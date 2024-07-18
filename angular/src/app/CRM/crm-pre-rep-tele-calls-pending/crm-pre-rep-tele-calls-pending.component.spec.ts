import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPreRepTeleCallsPendingComponent } from './crm-pre-rep-tele-calls-pending.component';

describe('CrmPreRepTeleCallsPendingComponent', () => {
  let component: CrmPreRepTeleCallsPendingComponent;
  let fixture: ComponentFixture<CrmPreRepTeleCallsPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPreRepTeleCallsPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPreRepTeleCallsPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
