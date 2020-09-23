import { DOCUMENT } from '@angular/common';
import { takeUntil } from 'rxjs/operators';
import {
  SeekConfig,
  SeekConfigService,
  SeekSidebarService,
  SeekSplashScreenService,
} from '@wseek/ui-kit';
import { Subject } from 'rxjs';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';

@Component({
  selector: 'wseek-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'articles';

  private _destroy$ = new Subject<void>();

  config: SeekConfig;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _seekConfigService: SeekConfigService,
    private _seekSidebarService: SeekSidebarService,
    private _splashScreenService: SeekSplashScreenService // private _seekNavigationService: SeekNavigationService
  ) {
    this._destroy$ = new Subject();
  }
  ngOnInit(): void {
    this._splashScreenService.onInit();
    this._seekConfigService.config
      .pipe(takeUntil(this._destroy$))
      .subscribe((config) => {
        this.config = config;
        console.log(config);


        for (let i = 0; i < this.document.body.classList.length; i++) {
          const className = this.document.body.classList[i];

          if (className.startsWith('theme-')) {
            this.document.body.classList.remove(className);
          }
        }

        this.document.body.classList.add(this.config.colorTheme);
      });
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }

  toggleSidebarOpen(key): void {
    this._seekSidebarService.getSidebar(key).toggleOpen();
  }
}
