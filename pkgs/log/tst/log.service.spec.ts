import { TestBed, inject } from '@angular/core/testing';

import { AppCfg, CfgModule } from '@nwx/cfg';

import { LogModule } from '../src/log.module';
import { LogService } from '../src/log.service';

const AppEnv: AppCfg = {
  production: false
};

describe('LogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CfgModule.forRoot(AppEnv), LogModule]
    });
  });

  it(
    'should be created',
    inject([LogService], (service: LogService) => {
      expect(service).toBeTruthy();
    })
  );
});
