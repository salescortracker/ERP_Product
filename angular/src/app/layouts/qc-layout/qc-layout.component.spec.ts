import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QCLayoutComponent } from './qc-layout.component';

describe('QCLayoutComponent', () => {
  let component: QCLayoutComponent;
  let fixture: ComponentFixture<QCLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QCLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QCLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
