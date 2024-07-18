import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvAutdiMaterialsComponent } from './inv-autdi-materials.component';

describe('InvAutdiMaterialsComponent', () => {
  let component: InvAutdiMaterialsComponent;
  let fixture: ComponentFixture<InvAutdiMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvAutdiMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvAutdiMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
