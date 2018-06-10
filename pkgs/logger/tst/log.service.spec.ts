import { TestBed, inject } from '@angular/core/testing';

import { AppCfg, CfgModule, CFG_OPTIONS, CfgService } from '@nwx/cfg';

import { LogLevels } from '../src/logger.types';
import { DefaultLogCfg } from '../src/logger.defaults';
import { LogModule } from '../src/logger.module';
import { LogService } from '../src/logger.service';

const AppEnv: AppCfg = {
  appName: '@nwx/logger',
  production: false,
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

  it(
    'should be have the app config options',
    inject([LogService], (service: LogService) => {
      expect(service.options.appName).toBe(AppEnv.appName);
    })
  );

  it(
    'should be have the module default config options',
    inject([LogService], (service: LogService) => {
      expect(service.options.log.level).toBe(LogLevels.none);
    })
  );

  it(
    'should log without failure',
    inject([LogService], (service: LogService) => {
      expect(service.debug('Logging a debug')).toEqual(undefined);
    })
  );
});
