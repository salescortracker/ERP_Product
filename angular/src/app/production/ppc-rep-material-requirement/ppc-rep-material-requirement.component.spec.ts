import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcRepMaterialRequirementComponent } from './ppc-rep-material-requirement.component';

describe('PpcRepMaterialRequirementComponent', () => {
  let component: PpcRepMaterialRequirementComponent;
  let fixture: ComponentFixture<PpcRepMaterialRequirementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpcRepMaterialRequirementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpcRepMaterialRequirementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
