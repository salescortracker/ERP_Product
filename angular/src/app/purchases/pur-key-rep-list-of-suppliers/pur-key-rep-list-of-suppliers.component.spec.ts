import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurKeyRepListOfSuppliersComponent } from './pur-key-rep-list-of-suppliers.component';

describe('PurKeyRepListOfSuppliersComponent', () => {
  let component: PurKeyRepListOfSuppliersComponent;
  let fixture: ComponentFixture<PurKeyRepListOfSuppliersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurKeyRepListOfSuppliersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurKeyRepListOfSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
