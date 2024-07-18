import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurSupplierGroupsComponent } from './pur-supplier-groups.component';

describe('PurSupplierGroupsComponent', () => {
  let component: PurSupplierGroupsComponent;
  let fixture: ComponentFixture<PurSupplierGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurSupplierGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurSupplierGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
