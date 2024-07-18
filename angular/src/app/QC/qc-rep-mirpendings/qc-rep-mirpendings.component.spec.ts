import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcRepMIRPendingsComponent } from './qc-rep-mirpendings.component';

describe('QcRepMIRPendingsComponent', () => {
  let component: QcRepMIRPendingsComponent;
  let fixture: ComponentFixture<QcRepMIRPendingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcRepMIRPendingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcRepMIRPendingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
