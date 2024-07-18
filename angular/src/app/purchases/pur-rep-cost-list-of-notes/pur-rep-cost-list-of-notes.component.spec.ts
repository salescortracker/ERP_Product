import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurRepCostListOfNotesComponent } from './pur-rep-cost-list-of-notes.component';

describe('PurRepCostListOfNotesComponent', () => {
  let component: PurRepCostListOfNotesComponent;
  let fixture: ComponentFixture<PurRepCostListOfNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurRepCostListOfNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurRepCostListOfNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
