import { TestBed, inject } from '@angular/core/testing';

import { FM5YoutubeService } from './fm5-youtube.service';

describe('FM5YoutubeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FM5YoutubeService]
    });
  });

  it('should ...', inject([FM5YoutubeService], (service: FM5YoutubeService) => {
    expect(service).toBeTruthy();
  }));
});
