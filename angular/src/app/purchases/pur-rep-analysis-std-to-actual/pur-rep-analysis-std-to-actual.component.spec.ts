import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepAnalysisStdToActualComponent } from './pur-rep-analysis-std-to-actual.component';

describe('PurRepAnalysisStdToActualComponent', () => {
  let component: PurRepAnalysisStdToActualComponent;
  let fixture: ComponentFixture<PurRepAnalysisStdToActualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepAnalysisStdToActualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepAnalysisStdToActualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
