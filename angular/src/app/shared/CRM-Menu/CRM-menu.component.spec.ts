import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CRMMenuComponent } from './CRM-menu.component';

describe('CRMMenuComponent', () => {
  let component: CRMMenuComponent;
  let fixture: ComponentFixture<CRMMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRMMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CRMMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
