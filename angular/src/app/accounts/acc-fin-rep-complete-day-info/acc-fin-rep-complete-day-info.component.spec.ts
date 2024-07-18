import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccFinRepCompleteDayInfoComponent } from './acc-fin-rep-complete-day-info.component';

describe('AccFinRepCompleteDayInfoComponent', () => {
  let component: AccFinRepCompleteDayInfoComponent;
  let fixture: ComponentFixture<AccFinRepCompleteDayInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccFinRepCompleteDayInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccFinRepCompleteDayInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
