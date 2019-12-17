import { TestBed } from '@angular/core/testing';

import { DocumentReferenceService } from './document-reference.service';

describe('DocumentReferenceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentReferenceService = TestBed.get(DocumentReferenceService);
    expect(service).toBeTruthy();
  });
});
