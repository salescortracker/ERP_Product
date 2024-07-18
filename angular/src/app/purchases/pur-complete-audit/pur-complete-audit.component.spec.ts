import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurCompleteAuditComponent } from './pur-complete-audit.component';

describe('PurCompleteAuditComponent', () => {
  let component: PurCompleteAuditComponent;
  let fixture: ComponentFixture<PurCompleteAuditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurCompleteAuditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurCompleteAuditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
