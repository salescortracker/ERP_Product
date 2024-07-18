import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmTempOrdersComponent } from './crm-temp-orders.component';

describe('CrmTempOrdersComponent', () => {
  let component: CrmTempOrdersComponent;
  let fixture: ComponentFixture<CrmTempOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmTempOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmTempOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
