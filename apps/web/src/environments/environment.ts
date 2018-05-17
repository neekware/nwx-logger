import { AppCfg, TargetPlatform, HttpMethod } from '@nwx/cfg';

import { LogLevels } from 'pkgs/logger';

export const environment: AppCfg = {
  // app name
  appName: '@nwx/logger',
  // target (browser, mobile, desktop)
  target: TargetPlatform.web,
  // production, staging or development
  production: false,
  // one or more app specific field(s)
  log: { level: LogLevels.debug }
};
