import { TestBed, inject } from '@angular/core/testing';

import { FM5MALService } from './fm5-mal.service';

describe('FM5MALService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FM5MALService]
    });
  });

  it('should be created', inject([FM5MALService], (service: FM5MALService) => {
    expect(service).toBeTruthy();
  }));
});
