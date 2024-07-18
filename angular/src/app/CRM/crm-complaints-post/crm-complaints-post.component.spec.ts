import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmComplaintsPostComponent } from './crm-complaints-post.component';

describe('CrmComplaintsPostComponent', () => {
  let component: CrmComplaintsPostComponent;
  let fixture: ComponentFixture<CrmComplaintsPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmComplaintsPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmComplaintsPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
