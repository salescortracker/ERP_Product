import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmOrdersRxComponent } from './crm-orders-rx.component';

describe('CrmOrdersRxComponent', () => {
  let component: CrmOrdersRxComponent;
  let fixture: ComponentFixture<CrmOrdersRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmOrdersRxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmOrdersRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
