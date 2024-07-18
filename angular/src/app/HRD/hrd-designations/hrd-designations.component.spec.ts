import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdDesignationsComponent } from './hrd-designations.component';

describe('HrdDesignationsComponent', () => {
  let component: HrdDesignationsComponent;
  let fixture: ComponentFixture<HrdDesignationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdDesignationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdDesignationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
