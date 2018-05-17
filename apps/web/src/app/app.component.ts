import { Component } from '@angular/core';
import { CfgService, DefaultCfg } from '@nwx/cfg';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Neekware';
  options = {};
  constructor(public cfg: CfgService) {
    this.title = this.cfg.options.appName;
  }
}
