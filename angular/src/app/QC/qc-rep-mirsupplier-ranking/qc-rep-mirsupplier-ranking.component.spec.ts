import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QcRepMIRSupplierRankingComponent } from './qc-rep-mirsupplier-ranking.component';

describe('QcRepMIRSupplierRankingComponent', () => {
  let component: QcRepMIRSupplierRankingComponent;
  let fixture: ComponentFixture<QcRepMIRSupplierRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QcRepMIRSupplierRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QcRepMIRSupplierRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
