import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrmPreRepItemWisePendingsComponent } from './crm-pre-rep-item-wise-pendings.component';

describe('CrmPreRepItemWisePendingsComponent', () => {
  let component: CrmPreRepItemWisePendingsComponent;
  let fixture: ComponentFixture<CrmPreRepItemWisePendingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrmPreRepItemWisePendingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrmPreRepItemWisePendingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
