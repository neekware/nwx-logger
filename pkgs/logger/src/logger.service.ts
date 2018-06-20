/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at http://neekware.com/license/MIT.html
 */

import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { merge } from 'lodash';
import { CfgService, AppCfg } from '@nwx/cfg';

import { LogLevels, LogNames, LogColors } from './logger.types';
import { DefaultLogCfg } from './logger.defaults';

/**
 * An injectable class that handles logging service
 */
@Injectable({
  providedIn: 'root'
})
export class LogService {
  public isPlatformIE = false;
  private _options: AppCfg = null;

  constructor(@Inject(PLATFORM_ID) public platformId, public cfg: CfgService) {
    this._options = merge({ log: DefaultLogCfg }, cfg.options);
    if (isPlatformBrowser(platformId)) {
      this.isPlatformIE = !!(
        navigator.userAgent.match(/Edge\//) ||
        navigator.userAgent.match(/Trident\//) ||
        navigator.userAgent.indexOf('MSIE') !== -1
      );
    }
    this.debug('LogService ready ...');
  }

  get options() {
    return this._options;
  }

  /**
   * Handles mission critical logs
   * @param message logging message
   * @param extras extra messages
   */
  critical(message, ...extras: any[]) {
    this.doLog(LogLevels.critical, message, extras);
  }

  /**
   * Handles system error logs
   * @param message logging message
   * @param extras extra messages
   */
  error(message, ...extras: any[]) {
    this.doLog(LogLevels.error, message, extras);
  }

  /**
   * Handles warning logs
   * @param message logging message
   * @param extras extra messages
   */
  warn(message, ...extras: any[]) {
    this.doLog(LogLevels.warn, message, extras);
  }

  /**
   * Handles info logs
   * @param message logging message
   * @param extras extra messages
   */
  info(message, ...extras: any[]) {
    this.doLog(LogLevels.info, message, extras);
  }

  /**
   * Handles debugging logs
   * @param message logging message
   * @param extras extra messages
   */
  debug(message, ...extras: any[]) {
    this.doLog(LogLevels.debug, message, extras);
  }

  /**
   * Returns current time in ISO format (2018-03-04T22:46:09.346Z)
   */
  private get time() {
    return new Date().toISOString();
  }

  /**
   * Handles the platform logging
   * @param level logging level
   * @param message logging message
   * @param extras extra message
   */
  private doLog(level: LogLevels, message: any, extras: any[] = []) {
    if (
      !message ||
      level === LogLevels.none ||
      level > this._options.log.level ||
      this._options.log.level === LogLevels.none
    ) {
      return;
    }

    if (this.isPlatformIE) {
      this.handleIE(level, message, extras);
    } else {
      const color = LogColors[level];
      console.log(
        `%c${this.time} [${LogNames[level]}]`,
        `color:${color}`,
        message,
        ...extras
      );
    }
  }

  /**
   * Handles the platform logging on IE
   * @param level logging level
   * @param message logging message
   * @param extras extra message
   */
  private handleIE(level: LogLevels, message: any, extras: any[] = []) {
    let logger = console.log;
    switch (level) {
      case LogLevels.critical:
      case LogLevels.error:
        logger = console.error;
        break;
      case LogLevels.warn:
        logger = console.warn;
        break;
      case LogLevels.info:
        logger = console.info;
        break;
      default:
        return;
    }
    logger(`%c${this.time} [${LogNames[level]}]`, message, ...extras);
  }
}
