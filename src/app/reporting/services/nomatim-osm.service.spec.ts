import { TestBed } from '@angular/core/testing';

import { NomatimOSMService } from './nomatim-osm.service';

describe('NomatimOSMService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NomatimOSMService = TestBed.get(NomatimOSMService);
    expect(service).toBeTruthy();
  });
});
