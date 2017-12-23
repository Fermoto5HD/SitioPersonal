import { TestBed, inject } from '@angular/core/testing';

import { FM5FlickrService } from './fm5-flickr.service';

describe('FM5FlickrService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FM5FlickrService]
    });
  });

  it('should be created', inject([FM5FlickrService], (service: FM5FlickrService) => {
    expect(service).toBeTruthy();
  }));
});
