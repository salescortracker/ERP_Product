import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcRepPendingProcessesComponent } from './ppc-rep-pending-processes.component';

describe('PpcRepPendingProcessesComponent', () => {
  let component: PpcRepPendingProcessesComponent;
  let fixture: ComponentFixture<PpcRepPendingProcessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpcRepPendingProcessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpcRepPendingProcessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
