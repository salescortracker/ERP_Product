import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiRepPlantDownReasonwiseComponent } from './mai-rep-plant-down-reasonwise.component';

describe('MaiRepPlantDownReasonwiseComponent', () => {
  let component: MaiRepPlantDownReasonwiseComponent;
  let fixture: ComponentFixture<MaiRepPlantDownReasonwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiRepPlantDownReasonwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiRepPlantDownReasonwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
