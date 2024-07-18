import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MisTasksComponent } from './mis-tasks.component';

describe('MisTasksComponent', () => {
  let component: MisTasksComponent;
  let fixture: ComponentFixture<MisTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MisTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MisTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
