/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CampSpotService } from './camp-spot-service.service';

describe('CampSpotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CampSpotService]
    });
  });

  it('should ...', inject([CampSpotService], (service: CampSpotService) => {
    expect(service).toBeTruthy();
  }));
});
