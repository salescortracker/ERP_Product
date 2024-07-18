import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmKeyRepCustomersComponent } from './crm-key-rep-customers.component';

describe('CrmKeyRepCustomersComponent', () => {
  let component: CrmKeyRepCustomersComponent;
  let fixture: ComponentFixture<CrmKeyRepCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmKeyRepCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmKeyRepCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
