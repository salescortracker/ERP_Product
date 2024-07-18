import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPostFollowUpComponent } from './crm-post-follow-up.component';

describe('CrmPostFollowUpComponent', () => {
  let component: CrmPostFollowUpComponent;
  let fixture: ComponentFixture<CrmPostFollowUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPostFollowUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPostFollowUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
