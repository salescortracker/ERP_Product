import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcRepMassAchievementsComponent } from './ppc-rep-mass-achievements.component';

describe('PpcRepMassAchievementsComponent', () => {
  let component: PpcRepMassAchievementsComponent;
  let fixture: ComponentFixture<PpcRepMassAchievementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpcRepMassAchievementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpcRepMassAchievementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
