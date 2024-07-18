import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiRepListofPlantDownComponent } from './mai-rep-listof-plant-down.component';

describe('MaiRepListofPlantDownComponent', () => {
  let component: MaiRepListofPlantDownComponent;
  let fixture: ComponentFixture<MaiRepListofPlantDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiRepListofPlantDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiRepListofPlantDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
