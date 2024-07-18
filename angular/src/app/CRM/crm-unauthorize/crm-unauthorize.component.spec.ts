import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmUnauthorizeComponent } from './crm-unauthorize.component';

describe('CrmUnauthorizeComponent', () => {
  let component: CrmUnauthorizeComponent;
  let fixture: ComponentFixture<CrmUnauthorizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmUnauthorizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmUnauthorizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
