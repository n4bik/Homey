import { TestBed } from '@angular/core/testing';

import { BeatsCrudService } from './beats-crud.service';

describe('BeatsCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeatsCrudService = TestBed.get(BeatsCrudService);
    expect(service).toBeTruthy();
  });
});
