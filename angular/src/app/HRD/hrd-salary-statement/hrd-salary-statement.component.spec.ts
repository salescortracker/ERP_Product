import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdSalaryStatementComponent } from './hrd-salary-statement.component';

describe('HrdSalaryStatementComponent', () => {
  let component: HrdSalaryStatementComponent;
  let fixture: ComponentFixture<HrdSalaryStatementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdSalaryStatementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdSalaryStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
