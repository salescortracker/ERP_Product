import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrismServicesComponent } from './prism-services.component';

describe('PrismServicesComponent', () => {
  let component: PrismServicesComponent;
  let fixture: ComponentFixture<PrismServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrismServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrismServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
