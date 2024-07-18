import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPreRepAdvancesLiableComponent } from './crm-pre-rep-advances-liable.component';

describe('CrmPreRepAdvancesLiableComponent', () => {
  let component: CrmPreRepAdvancesLiableComponent;
  let fixture: ComponentFixture<CrmPreRepAdvancesLiableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPreRepAdvancesLiableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPreRepAdvancesLiableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
