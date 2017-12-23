import { TestBed, inject } from '@angular/core/testing';

import { FM5InstagramService } from './fm5-instagram.service';

describe('FM5InstagramService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FM5InstagramService]
    });
  });

  it('should ...', inject([FM5InstagramService], (service: FM5InstagramService) => {
    expect(service).toBeTruthy();
  }));
});
