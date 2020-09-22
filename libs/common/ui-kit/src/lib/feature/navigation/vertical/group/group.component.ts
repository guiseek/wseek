import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SeekNavigationItem } from '../../navigation.interfaces';
import { SeekNavigationService } from '../../navigation.service';

@Component({
  selector: 'seek-nav-vertical-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss'],
})
export class SeekNavVerticalGroupComponent implements OnInit, OnDestroy {
  @HostBinding('class')
  classes = 'nav-group nav-item';

  @Input()
  item: SeekNavigationItem;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   */

  /**
   *
   * @param {ChangeDetectorRef} _changeDetectorRef
   * @param {SeekNavigationService} _seekNavigationService
   */
  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    private _seekNavigationService: SeekNavigationService
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
    // Subscribe to navigation item
    merge(
      this._seekNavigationService.onNavigationItemAdded,
      this._seekNavigationService.onNavigationItemUpdated,
      this._seekNavigationService.onNavigationItemRemoved
    )
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe(() => {
        // Mark for check
        this._changeDetectorRef.markForCheck();
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
