import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

describe('AuthService', () => {
  let service: AuthService
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [HttpClient, AuthService]
    });

    service = TestBed.inject(AuthService);
  });
  

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it(`should return boolean if is logged`, () => {
    expect(service.isLogged()).toEqual(jasmine.any(Function));
    expect(service.isLogged()).toThrow(jasmine.any(Boolean));
  });

});
