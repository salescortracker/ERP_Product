import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepOrderManagementExpectedMaterialsComponent } from './pur-rep-order-management-expected-materials.component';

describe('PurRepOrderManagementExpectedMaterialsComponent', () => {
  let component: PurRepOrderManagementExpectedMaterialsComponent;
  let fixture: ComponentFixture<PurRepOrderManagementExpectedMaterialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepOrderManagementExpectedMaterialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepOrderManagementExpectedMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
