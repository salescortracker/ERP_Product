import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurMaterialInwardsComponent } from './pur-material-inwards.component';

describe('PurMaterialInwardsComponent', () => {
  let component: PurMaterialInwardsComponent;
  let fixture: ComponentFixture<PurMaterialInwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurMaterialInwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurMaterialInwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
