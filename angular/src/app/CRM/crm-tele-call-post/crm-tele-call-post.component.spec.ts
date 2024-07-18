import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmTeleCallPostComponent } from './crm-tele-call-post.component';

describe('CrmTeleCallPostComponent', () => {
  let component: CrmTeleCallPostComponent;
  let fixture: ComponentFixture<CrmTeleCallPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmTeleCallPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmTeleCallPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
