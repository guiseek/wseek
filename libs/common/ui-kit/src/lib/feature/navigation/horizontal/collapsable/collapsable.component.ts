import {
  Component,
  HostBinding,
  HostListener,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { seekAnimations } from '../../../animations/index';
import { SeekConfigService } from '../../../config/config.service';

@Component({
  selector: 'seek-nav-horizontal-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.scss'],
  animations: seekAnimations,
})
export class SeekNavHorizontalCollapsableComponent
  implements OnInit, OnDestroy {
  seekConfig: any;
  isOpen = false;

  @HostBinding('class')
  classes = 'nav-collapsable nav-item';

  @Input()
  item: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(private _seekConfigService: SeekConfigService) {
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
    // Subscribe to config changes
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

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Open
   */
  @HostListener('mouseenter')
  open(): void {
    this.isOpen = true;
  }

  /**
   * Close
   */
  @HostListener('mouseleave')
  close(): void {
    this.isOpen = false;
  }
}
