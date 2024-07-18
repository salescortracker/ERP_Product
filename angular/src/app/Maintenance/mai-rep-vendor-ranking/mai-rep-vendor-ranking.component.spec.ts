import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaiRepVendorRankingComponent } from './mai-rep-vendor-ranking.component';

describe('MaiRepVendorRankingComponent', () => {
  let component: MaiRepVendorRankingComponent;
  let fixture: ComponentFixture<MaiRepVendorRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaiRepVendorRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaiRepVendorRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
