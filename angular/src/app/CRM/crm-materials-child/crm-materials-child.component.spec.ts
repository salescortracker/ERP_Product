import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmMaterialsChildComponent } from './crm-materials-child.component';

describe('CrmMaterialsChildComponent', () => {
  let component: CrmMaterialsChildComponent;
  let fixture: ComponentFixture<CrmMaterialsChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmMaterialsChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmMaterialsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
