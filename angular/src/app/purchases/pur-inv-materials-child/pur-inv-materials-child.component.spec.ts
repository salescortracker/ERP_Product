import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurInvMaterialsChildComponent } from './pur-inv-materials-child.component';

describe('PurInvMaterialsChildComponent', () => {
  let component: PurInvMaterialsChildComponent;
  let fixture: ComponentFixture<PurInvMaterialsChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurInvMaterialsChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurInvMaterialsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
