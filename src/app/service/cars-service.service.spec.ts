import { TestBed } from '@angular/core/testing';

import { CarsServiceService } from './cars-service.service';

describe('CarsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarsServiceService = TestBed.get(CarsServiceService);
    expect(service).toBeTruthy();
  });
});
