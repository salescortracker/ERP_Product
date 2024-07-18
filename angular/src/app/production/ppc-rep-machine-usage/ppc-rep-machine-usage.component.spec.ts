import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcRepMachineUsageComponent } from './ppc-rep-machine-usage.component';

describe('PpcRepMachineUsageComponent', () => {
  let component: PpcRepMachineUsageComponent;
  let fixture: ComponentFixture<PpcRepMachineUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpcRepMachineUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpcRepMachineUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
