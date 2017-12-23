import { TestBed, inject } from '@angular/core/testing';

import { FM5BlogService } from './fm5-blog.service';

describe('FM5BlogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FM5BlogService]
    });
  });

  it('should ...', inject([FM5BlogService], (service: FM5BlogService) => {
    expect(service).toBeTruthy();
  }));
});
