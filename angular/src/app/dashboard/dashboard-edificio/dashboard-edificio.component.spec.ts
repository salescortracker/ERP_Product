import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardEdificioComponent } from './dashboard-edificio.component';

describe('DashboardEdificioComponent', () => {
  let component: DashboardEdificioComponent;
  let fixture: ComponentFixture<DashboardEdificioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardEdificioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardEdificioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
