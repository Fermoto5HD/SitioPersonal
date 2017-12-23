import { TestBed, inject } from '@angular/core/testing';

import { FM5HamonService } from './fm5-hamon.service';

describe('FM5HamonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FM5HamonService]
    });
  });

  it('should ...', inject([FM5HamonService], (service: FM5HamonService) => {
    expect(service).toBeTruthy();
  }));
});
