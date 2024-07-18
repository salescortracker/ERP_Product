import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmQuotationsRxComponent } from './crm-quotations-rx.component';

describe('CrmQuotationsRxComponent', () => {
  let component: CrmQuotationsRxComponent;
  let fixture: ComponentFixture<CrmQuotationsRxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmQuotationsRxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmQuotationsRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
