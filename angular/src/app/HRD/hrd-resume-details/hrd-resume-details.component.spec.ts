import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdResumeDetailsComponent } from './hrd-resume-details.component';

describe('HrdResumeDetailsComponent', () => {
  let component: HrdResumeDetailsComponent;
  let fixture: ComponentFixture<HrdResumeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdResumeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdResumeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
