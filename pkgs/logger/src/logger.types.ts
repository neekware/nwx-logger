/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at http://neekware.com/license/MIT.html
 */

/**
 * Log config declaration
 */
export interface LogCfg {
  level?: number; // logger level (none = disabled)
}

/**
 * Log level
 * Each level enables itself and all level(s) above
 */
export enum LogLevels {
  critical = 0,
  error,
  warn,
  info,
  debug,
  none
}

/**
 * Log level name - order is important
 */
export const LogNames = ['CRITICAL', 'ERROR', 'WARN', 'INFO', 'DEBUG'];

/**
 * Log level colors - order is important
 */
export const LogColors = ['red', 'OrangeRed ', 'orange', 'teal', 'SlateGrey'];
