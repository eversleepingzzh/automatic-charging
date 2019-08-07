import { TestBed } from '@angular/core/testing';

import { OrderPageServiceService } from './order-page-service.service';

describe('OrderPageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrderPageServiceService = TestBed.get(OrderPageServiceService);
    expect(service).toBeTruthy();
  });
});
