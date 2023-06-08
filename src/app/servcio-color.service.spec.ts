import { TestBed } from '@angular/core/testing';

import { ServcioColorService } from './servcio-color.service';

describe('ServcioColorService', () => {
  let service: ServcioColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServcioColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
