import { SeekSidebarService } from './../../sidebar/sidebar.service';
import { SeekNavigationService } from './../../navigation/navigation.service';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { SeekConfigService } from '../../config';

@Component({
  selector: 'seek-navbar-horizontal',
  templateUrl: './navbar-horizontal.component.html',
  styleUrls: ['./navbar-horizontal.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SeekNavbarHorizontalComponent implements OnInit, OnDestroy {
  seekConfig: any;
  navigation: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {SeekConfigService} _seekConfigService
   * @param {SeekNavigationService} _seekNavigationService
   * @param {SeekSidebarService} _seekSidebarService
   */
  constructor(
    private _seekConfigService: SeekConfigService,
    private _seekNavigationService: SeekNavigationService,
    private _seekSidebarService: SeekSidebarService
  ) {
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
    // Get current navigation
    this._seekNavigationService.onNavigationChanged
      .pipe(
        filter((value) => value !== null),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe(() => {
        this.navigation = this._seekNavigationService.getCurrentNavigation();
      });

    // Subscribe to the config changes
    this._seekConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.seekConfig = config;
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
