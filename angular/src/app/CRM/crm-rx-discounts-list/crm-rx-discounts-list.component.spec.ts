import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmRxDiscountsListComponent } from './crm-rx-discounts-list.component';

describe('CrmRxDiscountsListComponent', () => {
  let component: CrmRxDiscountsListComponent;
  let fixture: ComponentFixture<CrmRxDiscountsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmRxDiscountsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmRxDiscountsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
