import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcTestsingMaterialsComponent } from './qc-testsing-materials.component';

describe('QcTestsingMaterialsComponent', () => {
  let component: QcTestsingMaterialsComponent;
  let fixture: ComponentFixture<QcTestsingMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcTestsingMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcTestsingMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
