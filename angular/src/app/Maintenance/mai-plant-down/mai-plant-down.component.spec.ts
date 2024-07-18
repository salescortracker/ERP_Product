import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiPlantDownComponent } from './mai-plant-down.component';

describe('MaiPlantDownComponent', () => {
  let component: MaiPlantDownComponent;
  let fixture: ComponentFixture<MaiPlantDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiPlantDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiPlantDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
