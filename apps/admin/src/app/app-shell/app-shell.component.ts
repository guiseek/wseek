import { APP_NAVIGATION } from './../config/app.navigation';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import {
  SeekConfig,
  SeekConfigService,
  SeekNavigation,
  SeekNavigationService,
  SeekSidebarService,
  SeekSplashScreenService,
} from '@wseek/ui-kit';

@Component({
  selector: 'wseek-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss']
})
export class AppShellComponent implements OnInit, OnDestroy {
  private _destroy$ = new Subject<void>();

  config: SeekConfig;
  navigation: SeekNavigation[];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private _seekConfigService: SeekConfigService,
    private _seekSidebarService: SeekSidebarService,
    private _splashScreenService: SeekSplashScreenService,
    private _seekNavigationService: SeekNavigationService
  ) {
    this.navigation = APP_NAVIGATION;
    this._seekNavigationService.register('main', this.navigation);
    this._seekNavigationService.setCurrentNavigation('main');

    this._destroy$ = new Subject();
  }
  ngOnInit(): void {
    this._splashScreenService.onInit();
    this._seekConfigService.config
      .pipe(takeUntil(this._destroy$))
      .subscribe((config) => {
        this.config = config;
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

  toggleSidebarOpen(key: string): void {
    this._seekSidebarService.getSidebar(key).toggleOpen();
  }
}
