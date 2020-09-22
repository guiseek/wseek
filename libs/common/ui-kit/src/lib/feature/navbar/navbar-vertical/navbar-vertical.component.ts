import { SeekPerfectScrollbarDirective } from './../../directives/seek-perfect-scrollbar.directive';
import { SeekNavigationService } from './../../navigation/navigation.service';
import { Router, NavigationEnd } from '@angular/router';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { Subject } from 'rxjs';
import { SeekConfigService } from '../../config';
import { SeekSidebarService } from '../../sidebar';
import { delay, takeUntil, filter, take } from 'rxjs/operators';

@Component({
  selector: 'seek-navbar-vertical',
  templateUrl: './navbar-vertical.component.html',
  styleUrls: ['./navbar-vertical.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SeekNavbarVerticalComponent implements OnInit, OnDestroy {
  seekConfig: any;
  navigation: any;

  // Private
  private _seekPerfectScrollbar: SeekPerfectScrollbarDirective;
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {SeekConfigService} _seekConfigService
   * @param {SeekNavigationService} _seekNavigationService
   * @param {SeekSidebarService} _seekSidebarService
   * @param {Router} _router
   */
  constructor(
    private _seekConfigService: SeekConfigService,
    private _seekNavigationService: SeekNavigationService,
    private _seekSidebarService: SeekSidebarService,
    private _router: Router
  ) {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  // Directive
  @ViewChild(SeekPerfectScrollbarDirective, { static: true })
  set directive(theDirective: SeekPerfectScrollbarDirective) {
    if (!theDirective) {
      return;
    }

    this._seekPerfectScrollbar = theDirective;

    // Update the scrollbar on collapsable item toggle
    this._seekNavigationService.onItemCollapseToggled
      .pipe(delay(500), takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        this._seekPerfectScrollbar.update();
      });

    // Scroll to the active item position
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        take(1)
      )
      .subscribe(() => {
        setTimeout(() => {
          this._seekPerfectScrollbar.scrollToElement(
            'seek-navbar .nav-link.active',
            -120
          );
        });
      });
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this._router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe(() => {
        if (this._seekSidebarService.getSidebar('navbar')) {
          this._seekSidebarService.getSidebar('navbar').close();
        }
      });

    // Subscribe to the config changes
    this._seekConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.seekConfig = config;
      });

    // Get current navigation
    this._seekNavigationService.onNavigationChanged
      .pipe(
        filter((value) => value !== null),
        takeUntil(this._unsubscribeAll)
      )
      .subscribe(() => {
        this.navigation = this._seekNavigationService.getCurrentNavigation();
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

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Toggle sidebar opened status
   */
  toggleSidebarOpened(): void {
    this._seekSidebarService.getSidebar('navbar').toggleOpen();
  }

  /**
   * Toggle sidebar folded status
   */
  toggleSidebarFolded(): void {
    this._seekSidebarService.getSidebar('navbar').toggleFold();
  }
}
