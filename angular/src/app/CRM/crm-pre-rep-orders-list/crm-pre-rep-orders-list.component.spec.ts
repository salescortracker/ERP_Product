import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPreRepOrdersListComponent } from './crm-pre-rep-orders-list.component';

describe('CrmPreRepOrdersListComponent', () => {
  let component: CrmPreRepOrdersListComponent;
  let fixture: ComponentFixture<CrmPreRepOrdersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPreRepOrdersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPreRepOrdersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
