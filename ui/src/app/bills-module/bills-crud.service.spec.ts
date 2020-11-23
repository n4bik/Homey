import { TestBed } from '@angular/core/testing';

import { BillsCrudService } from './bills-crud.service';

describe('BillsCrudServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BillsCrudService = TestBed.get(BillsCrudService);
    expect(service).toBeTruthy();
  });
});
