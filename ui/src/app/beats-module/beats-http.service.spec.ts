import { TestBed } from '@angular/core/testing';

import { BeatsHttpService } from './beats-http.service';

describe('BeatsHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeatsHttpService = TestBed.get(BeatsHttpService);
    expect(service).toBeTruthy();
  });
});
