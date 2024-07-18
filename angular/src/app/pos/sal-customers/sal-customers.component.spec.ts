import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalCustomersComponent } from './sal-customers.component';

describe('SalCustomersComponent', () => {
  let component: SalCustomersComponent;
  let fixture: ComponentFixture<SalCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
