import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPreRepOrdersPendingComponent } from './crm-pre-rep-orders-pending.component';

describe('CrmPreRepOrdersPendingComponent', () => {
  let component: CrmPreRepOrdersPendingComponent;
  let fixture: ComponentFixture<CrmPreRepOrdersPendingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPreRepOrdersPendingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPreRepOrdersPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
