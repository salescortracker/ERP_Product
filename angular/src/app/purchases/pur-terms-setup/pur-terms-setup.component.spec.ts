import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurTermsSetupComponent } from './pur-terms-setup.component';

describe('PurTermsSetupComponent', () => {
  let component: PurTermsSetupComponent;
  let fixture: ComponentFixture<PurTermsSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurTermsSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurTermsSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
