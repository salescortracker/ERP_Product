import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiRepBreakdownUnassignedComponent } from './mai-rep-breakdown-unassigned.component';

describe('MaiRepBreakdownUnassignedComponent', () => {
  let component: MaiRepBreakdownUnassignedComponent;
  let fixture: ComponentFixture<MaiRepBreakdownUnassignedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiRepBreakdownUnassignedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiRepBreakdownUnassignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
