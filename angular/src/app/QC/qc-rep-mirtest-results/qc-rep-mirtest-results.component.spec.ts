import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcRepMIRTestResultsComponent } from './qc-rep-mirtest-results.component';

describe('QcRepMIRTestResultsComponent', () => {
  let component: QcRepMIRTestResultsComponent;
  let fixture: ComponentFixture<QcRepMIRTestResultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcRepMIRTestResultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcRepMIRTestResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
