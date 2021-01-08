import { TestBed } from '@angular/core/testing';

import { SeguradoraService } from './seguradora.service';

describe('SeguradoraService', () => {
  let service: SeguradoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeguradoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
