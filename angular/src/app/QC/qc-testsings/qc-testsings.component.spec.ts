import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcTestsingsComponent } from './qc-testsings.component';

describe('QcTestsingsComponent', () => {
  let component: QcTestsingsComponent;
  let fixture: ComponentFixture<QcTestsingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcTestsingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcTestsingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
