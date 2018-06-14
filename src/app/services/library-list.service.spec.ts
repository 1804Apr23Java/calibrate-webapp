import { TestBed, inject } from '@angular/core/testing';

import { LibraryListService } from './library-list.service';

describe('LibraryListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryListService]
    });
  });

  it('should be created', inject([LibraryListService], (service: LibraryListService) => {
    expect(service).toBeTruthy();
  }));
});
