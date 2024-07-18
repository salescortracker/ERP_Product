import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcProcessWiseFinalQCComponent } from './qc-process-wise-final-qc.component';

describe('QcProcessWiseFinalQCComponent', () => {
  let component: QcProcessWiseFinalQCComponent;
  let fixture: ComponentFixture<QcProcessWiseFinalQCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcProcessWiseFinalQCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcProcessWiseFinalQCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
