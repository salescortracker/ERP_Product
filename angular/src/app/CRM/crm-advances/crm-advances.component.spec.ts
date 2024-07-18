import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmAdvancesComponent } from './crm-advances.component';

describe('CrmAdvancesComponent', () => {
  let component: CrmAdvancesComponent;
  let fixture: ComponentFixture<CrmAdvancesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmAdvancesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmAdvancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
