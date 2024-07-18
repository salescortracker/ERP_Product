import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurMaterialsChildComponent } from './pur-materials-child.component';

describe('PurMaterialsChildComponent', () => {
  let component: PurMaterialsChildComponent;
  let fixture: ComponentFixture<PurMaterialsChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurMaterialsChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurMaterialsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
