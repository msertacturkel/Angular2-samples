import { TestBed, inject } from '@angular/core/testing';

import { ImportjobService } from './importjob.service';

describe('ImportjobService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImportjobService]
    });
  });

  it('should be created', inject([ImportjobService], (service: ImportjobService) => {
    expect(service).toBeTruthy();
  }));
});
