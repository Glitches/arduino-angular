import { TestBed, inject } from '@angular/core/testing';

import { LedServiceService } from './led-service.service';

describe('LedServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LedServiceService]
    });
  });

  it('should be created', inject([LedServiceService], (service: LedServiceService) => {
    expect(service).toBeTruthy();
  }));
});
