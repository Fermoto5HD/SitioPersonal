import { TestBed, inject } from '@angular/core/testing';

import { FM5TraktService } from './fm5-trakt.service';

describe('FM5TraktService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FM5TraktService]
    });
  });

  it('should ...', inject([FM5TraktService], (service: FM5TraktService) => {
    expect(service).toBeTruthy();
  }));
});
