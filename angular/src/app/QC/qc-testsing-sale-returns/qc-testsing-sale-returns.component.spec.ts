import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcTestsingSaleReturnsComponent } from './qc-testsing-sale-returns.component';

describe('QcTestsingSaleReturnsComponent', () => {
  let component: QcTestsingSaleReturnsComponent;
  let fixture: ComponentFixture<QcTestsingSaleReturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcTestsingSaleReturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcTestsingSaleReturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
