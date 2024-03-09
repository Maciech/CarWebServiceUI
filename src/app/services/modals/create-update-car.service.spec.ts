import { TestBed } from '@angular/core/testing';

import { CreateUpdateCarService } from './create-update-car.service';

describe('CreateUpdateCarService', () => {
  let service: CreateUpdateCarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateUpdateCarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
