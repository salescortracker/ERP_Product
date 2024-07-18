import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdInterviewDetailsComponent } from './hrd-interview-details.component';

describe('HrdInterviewDetailsComponent', () => {
  let component: HrdInterviewDetailsComponent;
  let fixture: ComponentFixture<HrdInterviewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdInterviewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdInterviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
