import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmMarketingComponent } from './crm-marketing.component';

describe('CrmMarketingComponent', () => {
  let component: CrmMarketingComponent;
  let fixture: ComponentFixture<CrmMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
