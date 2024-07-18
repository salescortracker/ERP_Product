import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisInboxComponent } from './mis-inbox.component';

describe('MisInboxComponent', () => {
  let component: MisInboxComponent;
  let fixture: ComponentFixture<MisInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
