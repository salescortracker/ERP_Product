import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPreRepOrdersDelayedComponent } from './crm-pre-rep-orders-delayed.component';

describe('CrmPreRepOrdersDelayedComponent', () => {
  let component: CrmPreRepOrdersDelayedComponent;
  let fixture: ComponentFixture<CrmPreRepOrdersDelayedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPreRepOrdersDelayedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPreRepOrdersDelayedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
