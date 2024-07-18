import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QCMenuComponent } from './qc-menu.component';

describe('QCMenuComponent', () => {
  let component: QCMenuComponent;
  let fixture: ComponentFixture<QCMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QCMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QCMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
