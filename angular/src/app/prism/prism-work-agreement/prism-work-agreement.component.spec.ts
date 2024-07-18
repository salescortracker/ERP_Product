import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismWorkAgreementComponent } from './prism-work-agreement.component';

describe('PrismWorkAgreementComponent', () => {
  let component: PrismWorkAgreementComponent;
  let fixture: ComponentFixture<PrismWorkAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrismWorkAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismWorkAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
