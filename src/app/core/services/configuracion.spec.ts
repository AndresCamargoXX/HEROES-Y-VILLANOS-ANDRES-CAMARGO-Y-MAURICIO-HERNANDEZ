import { TestBed } from '@angular/core/testing';

import { ConfiguracionService } from './configuracion';

describe('Configuracion', () => {
  let service: ConfiguracionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConfiguracionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
