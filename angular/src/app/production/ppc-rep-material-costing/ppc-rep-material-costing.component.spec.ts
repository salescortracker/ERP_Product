import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcRepMaterialCostingComponent } from './ppc-rep-material-costing.component';

describe('PpcRepMaterialCostingComponent', () => {
  let component: PpcRepMaterialCostingComponent;
  let fixture: ComponentFixture<PpcRepMaterialCostingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpcRepMaterialCostingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpcRepMaterialCostingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
