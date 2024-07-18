import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcRepMaterialWastageComponent } from './ppc-rep-material-wastage.component';

describe('PpcRepMaterialWastageComponent', () => {
  let component: PpcRepMaterialWastageComponent;
  let fixture: ComponentFixture<PpcRepMaterialWastageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpcRepMaterialWastageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpcRepMaterialWastageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
