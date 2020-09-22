import {
  Directive,
  Input,
  OnInit,
  HostListener,
  OnDestroy,
  HostBinding,
} from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { MediaObserver } from '@angular/flex-layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SeekMatchMediaService } from '../services/match-media.service';
import { SeekMatSidenavHelperService } from './seek-mat-sidenav.service';

@Directive({
  selector: '[seekMatSidenavHelper]',
})
export class SeekMatSidenavHelperDirective implements OnInit, OnDestroy {
  @HostBinding('class.mat-is-locked-open')
  isLockedOpen: boolean;

  @Input()
  seekMatSidenavHelper: string;

  @Input()
  matIsLockedOpen: string;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {SeekMatchMediaService} _seekMatchMediaService
   * @param {SeekMatSidenavHelperService} _seekMatSidenavHelperService
   * @param {MatSidenav} _matSidenav
   * @param {MediaObserver} _mediaObserver
   */
  constructor(
    private _seekMatchMediaService: SeekMatchMediaService,
    private _seekMatSidenavHelperService: SeekMatSidenavHelperService,
    private _matSidenav: MatSidenav,
    private _mediaObserver: MediaObserver
  ) {
    // Set the defaults
    this.isLockedOpen = true;

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Register the sidenav to the service
    this._seekMatSidenavHelperService.setSidenav(
      this.seekMatSidenavHelper,
      this._matSidenav
    );

    if (
      this.matIsLockedOpen &&
      this._mediaObserver.isActive(this.matIsLockedOpen)
    ) {
      this.isLockedOpen = true;
      this._matSidenav.mode = 'side';
      this._matSidenav.toggle(true);
    } else {
      this.isLockedOpen = false;
      this._matSidenav.mode = 'over';
      this._matSidenav.toggle(false);
    }

    this._seekMatchMediaService.onMediaChange
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        if (
          this.matIsLockedOpen &&
          this._mediaObserver.isActive(this.matIsLockedOpen)
        ) {
          this.isLockedOpen = true;
          this._matSidenav.mode = 'side';
          this._matSidenav.toggle(true);
        } else {
          this.isLockedOpen = false;
          this._matSidenav.mode = 'over';
          this._matSidenav.toggle(false);
        }
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }
}

@Directive({
  selector: '[seekMatSidenavToggler]',
})
export class SeekMatSidenavTogglerDirective {
  @Input()
  seekMatSidenavToggler: string;

  /**
   * Constructor
   *
   * @param {SeekMatSidenavHelperService} _seekMatSidenavHelperService
   */
  constructor(
    private _seekMatSidenavHelperService: SeekMatSidenavHelperService
  ) {}

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * On click
   */
  @HostListener('click')
  onClick(): void {
    this._seekMatSidenavHelperService
      .getSidenav(this.seekMatSidenavToggler)
      .toggle();
  }
}
