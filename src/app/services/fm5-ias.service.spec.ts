import { TestBed, inject } from '@angular/core/testing';

import { FM5IASService } from './fm5-ias.service';

describe('FM5IASService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FM5IASService]
    });
  });

  it('should be created', inject([FM5IASService], (service: FM5IASService) => {
    expect(service).toBeTruthy();
  }));
});
