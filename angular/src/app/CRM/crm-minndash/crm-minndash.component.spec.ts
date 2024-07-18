import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmMINNDashComponent } from './crm-minndash.component';

describe('CrmMINNDashComponent', () => {
  let component: CrmMINNDashComponent;
  let fixture: ComponentFixture<CrmMINNDashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmMINNDashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmMINNDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
