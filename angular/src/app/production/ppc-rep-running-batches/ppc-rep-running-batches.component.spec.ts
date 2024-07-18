import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcRepRunningBatchesComponent } from './ppc-rep-running-batches.component';

describe('PpcRepRunningBatchesComponent', () => {
  let component: PpcRepRunningBatchesComponent;
  let fixture: ComponentFixture<PpcRepRunningBatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpcRepRunningBatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpcRepRunningBatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
