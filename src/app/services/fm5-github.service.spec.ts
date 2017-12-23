import { TestBed, inject } from '@angular/core/testing';

import { FM5GithubService } from './fm5-github.service';

describe('FM5GithubService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FM5GithubService]
    });
  });

  it('should be created', inject([FM5GithubService], (service: FM5GithubService) => {
    expect(service).toBeTruthy();
  }));
});
