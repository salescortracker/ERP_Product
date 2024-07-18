import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmlicenseComponent } from './admlicense.component';

describe('AdmlicenseComponent', () => {
  let component: AdmlicenseComponent;
  let fixture: ComponentFixture<AdmlicenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmlicenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmlicenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
