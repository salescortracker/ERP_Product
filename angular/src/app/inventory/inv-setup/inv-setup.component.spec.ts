import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvSetupComponent } from './inv-setup.component';

describe('InvSetupComponent', () => {
  let component: InvSetupComponent;
  let fixture: ComponentFixture<InvSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
