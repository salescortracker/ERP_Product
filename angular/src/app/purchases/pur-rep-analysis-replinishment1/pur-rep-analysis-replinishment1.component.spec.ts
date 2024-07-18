import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepAnalysisReplinishment1Component } from './pur-rep-analysis-replinishment1.component';

describe('PurRepAnalysisReplinishment1Component', () => {
  let component: PurRepAnalysisReplinishment1Component;
  let fixture: ComponentFixture<PurRepAnalysisReplinishment1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepAnalysisReplinishment1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepAnalysisReplinishment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
