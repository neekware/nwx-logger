import { AppCfg, TargetPlatform, HttpMethod } from '@nwx/cfg';

import { LogLevels } from 'pkgs/logger';

export const environment: AppCfg = {
  // app name
  appName: '@nwx/cfg',
  // target (browser, mobile, desktop)
  target: TargetPlatform.web,
  // production, staging or development
  production: true,
  // one or more app specific field(s)
  log: { level: LogLevels.debug }
};
