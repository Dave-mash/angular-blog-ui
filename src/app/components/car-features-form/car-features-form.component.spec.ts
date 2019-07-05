import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarFeaturesFormComponent } from './car-features-form.component';

describe('CarFeaturesFormComponent', () => {
  let component: CarFeaturesFormComponent;
  let fixture: ComponentFixture<CarFeaturesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFeaturesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFeaturesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
