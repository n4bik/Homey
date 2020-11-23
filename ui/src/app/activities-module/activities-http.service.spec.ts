import { TestBed } from '@angular/core/testing';

import { ActivitiesHttpService } from './activities-http.service';

describe('ActivitiesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivitiesHttpService = TestBed.get(ActivitiesHttpService);
    expect(service).toBeTruthy();
  });
});
