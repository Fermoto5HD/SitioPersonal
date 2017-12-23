import { TestBed, inject } from '@angular/core/testing';

import { FM5TwitterService } from './fm5-twitter.service';

describe('FM5TwitterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FM5TwitterService]
    });
  });

  it('should be created', inject([FM5TwitterService], (service: FM5TwitterService) => {
    expect(service).toBeTruthy();
  }));
});
