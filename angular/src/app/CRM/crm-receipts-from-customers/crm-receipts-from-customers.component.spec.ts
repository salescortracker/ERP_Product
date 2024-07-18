import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmReceiptsFromCustomersComponent } from './crm-receipts-from-customers.component';

describe('CrmReceiptsFromCustomersComponent', () => {
  let component: CrmReceiptsFromCustomersComponent;
  let fixture: ComponentFixture<CrmReceiptsFromCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmReceiptsFromCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmReceiptsFromCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
