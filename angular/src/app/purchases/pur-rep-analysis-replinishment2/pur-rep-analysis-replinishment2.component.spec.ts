import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepAnalysisReplinishment2Component } from './pur-rep-analysis-replinishment2.component';

describe('PurRepAnalysisReplinishment2Component', () => {
  let component: PurRepAnalysisReplinishment2Component;
  let fixture: ComponentFixture<PurRepAnalysisReplinishment2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepAnalysisReplinishment2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepAnalysisReplinishment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
