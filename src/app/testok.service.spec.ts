import { TestBed } from '@angular/core/testing';

import { TestokService } from './testok.service';

describe('TestokService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TestokService = TestBed.get(TestokService);
    expect(service).toBeTruthy();
  });
});
