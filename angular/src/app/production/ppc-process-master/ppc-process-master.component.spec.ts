import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PpcProcessMasterComponent } from './ppc-process-master.component';

describe('PpcProcessMasterComponent', () => {
  let component: PpcProcessMasterComponent;
  let fixture: ComponentFixture<PpcProcessMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PpcProcessMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PpcProcessMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
