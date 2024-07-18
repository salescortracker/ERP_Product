import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmSystemVerificationComponent } from './adm-system-verification.component';

describe('AdmSystemVerificationComponent', () => {
  let component: AdmSystemVerificationComponent;
  let fixture: ComponentFixture<AdmSystemVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmSystemVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmSystemVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
