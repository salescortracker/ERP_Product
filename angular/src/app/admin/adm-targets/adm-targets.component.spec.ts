import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmTargetsComponent } from './adm-targets.component';

describe('AdmTargetsComponent', () => {
  let component: AdmTargetsComponent;
  let fixture: ComponentFixture<AdmTargetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmTargetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
