import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiUnAuthorisedComponent } from './mai-un-authorised.component';

describe('MaiUnAuthorisedComponent', () => {
  let component: MaiUnAuthorisedComponent;
  let fixture: ComponentFixture<MaiUnAuthorisedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiUnAuthorisedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiUnAuthorisedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
