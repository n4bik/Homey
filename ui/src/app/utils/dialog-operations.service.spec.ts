import { TestBed } from '@angular/core/testing';

import { DialogOperationsService } from './dialog-operations.service';

describe('DialogOperationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DialogOperationsService = TestBed.get(DialogOperationsService);
    expect(service).toBeTruthy();
  });
});
