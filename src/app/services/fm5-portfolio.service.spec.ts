import { TestBed, inject } from '@angular/core/testing';

import { FM5PortfolioService } from './fm5-portfolio.service';

describe('FM5PortfolioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FM5PortfolioService]
    });
  });

  it('should ...', inject([FM5PortfolioService], (service: FM5PortfolioService) => {
    expect(service).toBeTruthy();
  }));
});
