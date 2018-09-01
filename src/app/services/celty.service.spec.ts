import { TestBed, inject } from '@angular/core/testing';

import { CeltyService } from './celty.service';

describe('CeltyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CeltyService]
    });
  });

  it('should ...', inject([CeltyService], (service: CeltyService) => {
    expect(service).toBeTruthy();
  }));
});
