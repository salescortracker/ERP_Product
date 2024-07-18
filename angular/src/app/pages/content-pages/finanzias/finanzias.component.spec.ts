import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanziasComponent } from './finanzias.component';

describe('FinanziasComponent', () => {
  let component: FinanziasComponent;
  let fixture: ComponentFixture<FinanziasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinanziasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanziasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
