import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmContriesComponent } from './adm-contries.component';

describe('AdmContriesComponent', () => {
  let component: AdmContriesComponent;
  let fixture: ComponentFixture<AdmContriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmContriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmContriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
