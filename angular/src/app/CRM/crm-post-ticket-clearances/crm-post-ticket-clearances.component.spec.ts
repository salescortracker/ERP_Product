import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPostTicketClearancesComponent } from './crm-post-ticket-clearances.component';

describe('CrmPostTicketClearancesComponent', () => {
  let component: CrmPostTicketClearancesComponent;
  let fixture: ComponentFixture<CrmPostTicketClearancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPostTicketClearancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPostTicketClearancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
