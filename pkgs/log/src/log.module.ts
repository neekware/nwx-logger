/**
 * @license
 * Copyright Neekware Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at http://neekware.com/license/MIT.html
 */

import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogService } from './log.service';

@NgModule({
  imports: [CommonModule]
})
export class LogModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: LogModule
  ) {
    if (parentModule) {
      throw new Error('LogModule is already loaded. Import it in the AppModule only');
    }
  }
}
