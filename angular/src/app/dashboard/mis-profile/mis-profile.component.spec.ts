import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisProfileComponent } from './mis-profile.component';

describe('MisProfileComponent', () => {
  let component: MisProfileComponent;
  let fixture: ComponentFixture<MisProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
