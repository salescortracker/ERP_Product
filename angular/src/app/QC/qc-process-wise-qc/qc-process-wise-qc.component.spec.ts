import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcProcessWiseQCComponent } from './qc-process-wise-qc.component';

describe('QcProcessWiseQCComponent', () => {
  let component: QcProcessWiseQCComponent;
  let fixture: ComponentFixture<QcProcessWiseQCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcProcessWiseQCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcProcessWiseQCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
