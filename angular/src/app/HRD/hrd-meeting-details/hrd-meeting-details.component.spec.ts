import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdMeetingDetailsComponent } from './hrd-meeting-details.component';

describe('HrdMeetingDetailsComponent', () => {
  let component: HrdMeetingDetailsComponent;
  let fixture: ComponentFixture<HrdMeetingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdMeetingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdMeetingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
