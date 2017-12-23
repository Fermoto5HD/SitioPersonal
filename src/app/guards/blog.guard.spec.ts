import { TestBed, async, inject } from '@angular/core/testing';

import { BlogGuard } from './blog.guard';

describe('BlogGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogGuard]
    });
  });

  it('should ...', inject([BlogGuard], (guard: BlogGuard) => {
    expect(guard).toBeTruthy();
  }));
});
