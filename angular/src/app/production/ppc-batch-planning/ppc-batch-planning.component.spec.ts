import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcBatchPlanningComponent } from './ppc-batch-planning.component';

describe('PpcBatchPlanningComponent', () => {
  let component: PpcBatchPlanningComponent;
  let fixture: ComponentFixture<PpcBatchPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpcBatchPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpcBatchPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
