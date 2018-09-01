import { TestBed, async, inject } from '@angular/core/testing';

import { WorkGuard } from './work.guard';

describe('WorkGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WorkGuard]
    });
  });

  it('should ...', inject([WorkGuard], (guard: WorkGuard) => {
    expect(guard).toBeTruthy();
  }));
});
