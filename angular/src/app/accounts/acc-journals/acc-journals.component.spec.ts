import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccJournalsComponent } from './acc-journals.component';

describe('AccJournalsComponent', () => {
  let component: AccJournalsComponent;
  let fixture: ComponentFixture<AccJournalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccJournalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccJournalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
