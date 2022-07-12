import { TestBed } from '@angular/core/testing';

import { CustomerserviceService } from './customer.service';

describe('CustomerserviceService', () => {
  let service: CustomerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
