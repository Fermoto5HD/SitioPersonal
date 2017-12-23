import { TestBed, inject } from '@angular/core/testing';

import { FM5NoEncontradoService } from './fm5-noencontrado.service';

describe('FM5NoEncontradoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FM5NoEncontradoService]
    });
  });

  it('should ...', inject([FM5NoEncontradoService], (service: FM5NoEncontradoService) => {
    expect(service).toBeTruthy();
  }));
});
