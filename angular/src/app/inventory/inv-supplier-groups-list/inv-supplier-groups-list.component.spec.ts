import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvSupplierGroupsListComponent } from './inv-supplier-groups-list.component';

describe('InvSupplierGroupsListComponent', () => {
  let component: InvSupplierGroupsListComponent;
  let fixture: ComponentFixture<InvSupplierGroupsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvSupplierGroupsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvSupplierGroupsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
