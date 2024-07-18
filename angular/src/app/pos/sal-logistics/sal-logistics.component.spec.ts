import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalLogisticsComponent } from './sal-logistics.component';

describe('SalLogisticsComponent', () => {
  let component: SalLogisticsComponent;
  let fixture: ComponentFixture<SalLogisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalLogisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalLogisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
