import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcMIRTestingsComponent } from './qc-mirtestings.component';

describe('QcMIRTestingsComponent', () => {
  let component: QcMIRTestingsComponent;
  let fixture: ComponentFixture<QcMIRTestingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcMIRTestingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcMIRTestingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
