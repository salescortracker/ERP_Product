import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPreRepOrdersCustomerwiseComponent } from './crm-pre-rep-orders-customerwise.component';

describe('CrmPreRepOrdersCustomerwiseComponent', () => {
  let component: CrmPreRepOrdersCustomerwiseComponent;
  let fixture: ComponentFixture<CrmPreRepOrdersCustomerwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPreRepOrdersCustomerwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPreRepOrdersCustomerwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
