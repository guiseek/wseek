import { TestBed } from '@angular/core/testing';

import { SeekSidebarService } from './sidebar.service';

describe('SeekSidebarService', () => {
  let service: SeekSidebarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeekSidebarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
