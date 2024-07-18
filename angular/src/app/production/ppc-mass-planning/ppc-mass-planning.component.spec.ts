import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcMassPlanningComponent } from './ppc-mass-planning.component';

describe('PpcMassPlanningComponent', () => {
  let component: PpcMassPlanningComponent;
  let fixture: ComponentFixture<PpcMassPlanningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpcMassPlanningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpcMassPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
