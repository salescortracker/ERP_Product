import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPostTicketsComponent } from './crm-post-tickets.component';

describe('CrmPostTicketsComponent', () => {
  let component: CrmPostTicketsComponent;
  let fixture: ComponentFixture<CrmPostTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPostTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPostTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
