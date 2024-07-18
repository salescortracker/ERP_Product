import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdLeaveRequestsComponent } from './hrd-leave-requests.component';

describe('HrdLeaveRequestsComponent', () => {
  let component: HrdLeaveRequestsComponent;
  let fixture: ComponentFixture<HrdLeaveRequestsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdLeaveRequestsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdLeaveRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
