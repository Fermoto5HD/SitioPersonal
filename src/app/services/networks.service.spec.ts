import { TestBed, inject } from '@angular/core/testing';

import { NetworksService } from './networks.service';

describe('NetworksService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetworksService]
    });
  });

  it('should be created', inject([NetworksService], (service: NetworksService) => {
    expect(service).toBeTruthy();
  }));
});
