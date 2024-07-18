import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccRepActivityLogComponent } from './acc-rep-activity-log.component';

describe('AccRepActivityLogComponent', () => {
  let component: AccRepActivityLogComponent;
  let fixture: ComponentFixture<AccRepActivityLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccRepActivityLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccRepActivityLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
