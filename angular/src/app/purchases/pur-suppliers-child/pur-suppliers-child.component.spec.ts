import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurSuppliersChildComponent } from './pur-suppliers-child.component';

describe('PurSuppliersChildComponent', () => {
  let component: PurSuppliersChildComponent;
  let fixture: ComponentFixture<PurSuppliersChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurSuppliersChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurSuppliersChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
