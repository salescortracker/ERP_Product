import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiServiceAssignComponent } from './mai-service-assign.component';

describe('MaiServiceAssignComponent', () => {
  let component: MaiServiceAssignComponent;
  let fixture: ComponentFixture<MaiServiceAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiServiceAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiServiceAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
