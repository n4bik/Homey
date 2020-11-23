import { TestBed } from '@angular/core/testing';

import { ActivitiesCrudService } from './activities-crud.service';

describe('ActivitiesOperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivitiesCrudService = TestBed.get(ActivitiesCrudService);
    expect(service).toBeTruthy();
  });
});
