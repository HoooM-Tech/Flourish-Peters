import { TestBed } from '@angular/core/testing';

import { MmtformService } from './mmtform.service';

describe('MmtformService', () => {
  let service: MmtformService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MmtformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
