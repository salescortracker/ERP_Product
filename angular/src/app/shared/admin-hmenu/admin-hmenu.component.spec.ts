import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHMenuComponent } from './admin-hmenu.component';

describe('AdminHMenuComponent', () => {
  let component: AdminHMenuComponent;
  let fixture: ComponentFixture<AdminHMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminHMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminHMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
