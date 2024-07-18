import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurSupplierOpeningsComponent } from './pur-supplier-openings.component';

describe('PurSupplierOpeningsComponent', () => {
  let component: PurSupplierOpeningsComponent;
  let fixture: ComponentFixture<PurSupplierOpeningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurSupplierOpeningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurSupplierOpeningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
