import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmCustomersChildComponent } from './crm-customers-child.component';

describe('CrmCustomersChildComponent', () => {
  let component: CrmCustomersChildComponent;
  let fixture: ComponentFixture<CrmCustomersChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmCustomersChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmCustomersChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
