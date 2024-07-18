import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmStatesComponent } from './adm-states.component';

describe('AdmStatesComponent', () => {
  let component: AdmStatesComponent;
  let fixture: ComponentFixture<AdmStatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmStatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmStatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
