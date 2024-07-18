import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcUnauthorizeComponent } from './qc-unauthorize.component';

describe('QcUnauthorizeComponent', () => {
  let component: QcUnauthorizeComponent;
  let fixture: ComponentFixture<QcUnauthorizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcUnauthorizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcUnauthorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
