import { TestBed } from '@angular/core/testing';

import { SeekNavigationService } from './navigation.service';

describe('SeekNavigationService', () => {
  let service: SeekNavigationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeekNavigationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
