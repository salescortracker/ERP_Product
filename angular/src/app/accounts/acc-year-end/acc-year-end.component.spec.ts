import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccYearEndComponent } from './acc-year-end.component';

describe('AccYearEndComponent', () => {
  let component: AccYearEndComponent;
  let fixture: ComponentFixture<AccYearEndComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccYearEndComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccYearEndComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
