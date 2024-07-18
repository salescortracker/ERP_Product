import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdTrainingDetailsComponent } from './hrd-training-details.component';

describe('HrdTrainingDetailsComponent', () => {
  let component: HrdTrainingDetailsComponent;
  let fixture: ComponentFixture<HrdTrainingDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdTrainingDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdTrainingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
