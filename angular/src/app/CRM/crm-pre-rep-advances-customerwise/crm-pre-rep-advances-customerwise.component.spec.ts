import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPreRepAdvancesCustomerwiseComponent } from './crm-pre-rep-advances-customerwise.component';

describe('CrmPreRepAdvancesCustomerwiseComponent', () => {
  let component: CrmPreRepAdvancesCustomerwiseComponent;
  let fixture: ComponentFixture<CrmPreRepAdvancesCustomerwiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPreRepAdvancesCustomerwiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPreRepAdvancesCustomerwiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
