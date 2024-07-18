import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvSuppliersListComponent } from './inv-suppliers-list.component';

describe('InvSuppliersListComponent', () => {
  let component: InvSuppliersListComponent;
  let fixture: ComponentFixture<InvSuppliersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvSuppliersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvSuppliersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
