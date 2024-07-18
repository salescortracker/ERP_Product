import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismTrainingComponent } from './prism-training.component';

describe('PrismTrainingComponent', () => {
  let component: PrismTrainingComponent;
  let fixture: ComponentFixture<PrismTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrismTrainingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
