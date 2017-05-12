import { TestBed, inject } from '@angular/core/testing';

import { Fm5TraktService } from './fm5-trakt.service';

describe('Fm5TraktService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Fm5TraktService]
    });
  });

  it('should ...', inject([Fm5TraktService], (service: Fm5TraktService) => {
    expect(service).toBeTruthy();
  }));
});
