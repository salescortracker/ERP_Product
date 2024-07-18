import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrdKeyRepDesignationsComponent } from './hrd-key-rep-designations.component';

describe('HrdKeyRepDesignationsComponent', () => {
  let component: HrdKeyRepDesignationsComponent;
  let fixture: ComponentFixture<HrdKeyRepDesignationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrdKeyRepDesignationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrdKeyRepDesignationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
