import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmTargetSettingComponent } from './crm-target-setting.component';

describe('CrmTargetSettingComponent', () => {
  let component: CrmTargetSettingComponent;
  let fixture: ComponentFixture<CrmTargetSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmTargetSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmTargetSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
