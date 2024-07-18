import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurKeyRepListOfSupplierGroupsComponent } from './pur-key-rep-list-of-supplier-groups.component';

describe('PurKeyRepListOfSupplierGroupsComponent', () => {
  let component: PurKeyRepListOfSupplierGroupsComponent;
  let fixture: ComponentFixture<PurKeyRepListOfSupplierGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurKeyRepListOfSupplierGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurKeyRepListOfSupplierGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
