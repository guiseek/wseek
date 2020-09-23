import { SeekConfig } from './../config/config.interface';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SeekConfigService } from '../config/config.service';

@Component({
  selector: 'seek-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SeekSearchBarComponent implements OnInit, OnDestroy {
  collapsed: boolean;
  seekConfig: SeekConfig;

  // tslint:disable-next-line: no-output-native
  @Output() input: EventEmitter<any>;

  // Private
  private _destroy$: Subject<any>;

  /**
   * Constructor
   *
   * @param {SeekConfigService} _seekConfigService
   */
  constructor(private _seekConfigService: SeekConfigService) {
    // Set the defaults
    this.input = new EventEmitter();
    this.collapsed = true;

    // Set the private defaults
    this._destroy$ = new Subject();
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
      .pipe(takeUntil(this._destroy$))
      .subscribe((config) => {
        this.seekConfig = config;
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._destroy$.next();
    this._destroy$.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Collapse
   */
  collapse(): void {
    this.collapsed = true;
  }

  /**
   * Expand
   */
  expand(): void {
    this.collapsed = false;
  }

  /**
   * Search
   *
   * @param event
   */
  search(event): void {
    this.input.emit(event.target.value);
  }
}
