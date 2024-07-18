import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdEmpInOutComponent } from './hrd-emp-in-out.component';

describe('HrdEmpInOutComponent', () => {
  let component: HrdEmpInOutComponent;
  let fixture: ComponentFixture<HrdEmpInOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdEmpInOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdEmpInOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
