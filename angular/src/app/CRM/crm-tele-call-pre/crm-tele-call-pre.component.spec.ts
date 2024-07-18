import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmTeleCallPreComponent } from './crm-tele-call-pre.component';

describe('CrmTeleCallPreComponent', () => {
  let component: CrmTeleCallPreComponent;
  let fixture: ComponentFixture<CrmTeleCallPreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmTeleCallPreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmTeleCallPreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
