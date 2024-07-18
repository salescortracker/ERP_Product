import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiRepListOfBrekdownsComponent } from './mai-rep-list-of-brekdowns.component';

describe('MaiRepListOfBrekdownsComponent', () => {
  let component: MaiRepListOfBrekdownsComponent;
  let fixture: ComponentFixture<MaiRepListOfBrekdownsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiRepListOfBrekdownsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiRepListOfBrekdownsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
