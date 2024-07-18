import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvAuditConsumablesComponent } from './inv-audit-consumables.component';

describe('InvAuditConsumablesComponent', () => {
  let component: InvAuditConsumablesComponent;
  let fixture: ComponentFixture<InvAuditConsumablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvAuditConsumablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvAuditConsumablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
