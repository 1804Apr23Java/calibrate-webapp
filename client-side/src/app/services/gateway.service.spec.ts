import { TestBed, inject } from '@angular/core/testing';

import { GatewayService } from './gateway.service';
import { HttpClientModule } from '@angular/common/http';

describe('GatewayService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [GatewayService]
    });
  });

  it('should be created', inject([GatewayService], (service: GatewayService) => {
    expect(service).toBeTruthy();
  }));
});
