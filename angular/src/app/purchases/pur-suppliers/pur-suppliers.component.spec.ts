import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurSuppliersComponent } from './pur-suppliers.component';

describe('PurSuppliersComponent', () => {
  let component: PurSuppliersComponent;
  let fixture: ComponentFixture<PurSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
