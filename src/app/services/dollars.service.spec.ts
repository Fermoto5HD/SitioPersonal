import { TestBed, inject } from '@angular/core/testing';

import { DollarsService } from './dollars.service';

describe('DollarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DollarsService]
    });
  });

  it('should ...', inject([DollarsService], (service: DollarsService) => {
    expect(service).toBeTruthy();
  }));
});
