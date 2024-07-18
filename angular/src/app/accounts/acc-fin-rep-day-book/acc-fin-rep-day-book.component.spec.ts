import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccFinRepDayBookComponent } from './acc-fin-rep-day-book.component';

describe('AccFinRepDayBookComponent', () => {
  let component: AccFinRepDayBookComponent;
  let fixture: ComponentFixture<AccFinRepDayBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccFinRepDayBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccFinRepDayBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
