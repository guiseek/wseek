import { Subject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject } from '@angular/core';
import { SeekConfig, SeekConfigService, SeekSidebarService, SeekSplashScreenService } from '@wseek/ui-kit';

@Component({
  selector: 'wseek-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'admin';

  private _destroy$ = new Subject<void>();

  config: SeekConfig;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _seekConfigService: SeekConfigService,
    private _seekSidebarService: SeekSidebarService,
    private _splashScreenService: SeekSplashScreenService
  ) {
    this._destroy$ = new Subject();
  }

  ngOnInit() {
    this._splashScreenService.onInit();
  }

}
