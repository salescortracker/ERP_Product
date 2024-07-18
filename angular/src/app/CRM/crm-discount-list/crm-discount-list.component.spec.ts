import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmDiscountListComponent } from './crm-discount-list.component';

describe('CrmDiscountListComponent', () => {
  let component: CrmDiscountListComponent;
  let fixture: ComponentFixture<CrmDiscountListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmDiscountListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmDiscountListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
