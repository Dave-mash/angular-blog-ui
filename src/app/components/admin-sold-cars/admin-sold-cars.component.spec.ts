import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSoldCarsComponent } from './admin-sold-cars.component';

describe('AdminSoldCarsComponent', () => {
  let component: AdminSoldCarsComponent;
  let fixture: ComponentFixture<AdminSoldCarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSoldCarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSoldCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
