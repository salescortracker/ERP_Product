import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmCustomersComponent } from './crm-customers.component';

describe('CrmCustomersComponent', () => {
  let component: CrmCustomersComponent;
  let fixture: ComponentFixture<CrmCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
