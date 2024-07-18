import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmSystemMakeComponent } from './adm-system-make.component';

describe('AdmSystemMakeComponent', () => {
  let component: AdmSystemMakeComponent;
  let fixture: ComponentFixture<AdmSystemMakeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmSystemMakeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmSystemMakeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
