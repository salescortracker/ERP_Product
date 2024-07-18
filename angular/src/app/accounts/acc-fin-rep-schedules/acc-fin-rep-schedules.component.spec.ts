import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccFinRepSchedulesComponent } from './acc-fin-rep-schedules.component';

describe('AccFinRepSchedulesComponent', () => {
  let component: AccFinRepSchedulesComponent;
  let fixture: ComponentFixture<AccFinRepSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccFinRepSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccFinRepSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
