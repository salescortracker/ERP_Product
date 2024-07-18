import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepOrderManagementPendingAdvancesComponent } from './pur-rep-order-management-pending-advances.component';

describe('PurRepOrderManagementPendingAdvancesComponent', () => {
  let component: PurRepOrderManagementPendingAdvancesComponent;
  let fixture: ComponentFixture<PurRepOrderManagementPendingAdvancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepOrderManagementPendingAdvancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepOrderManagementPendingAdvancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
