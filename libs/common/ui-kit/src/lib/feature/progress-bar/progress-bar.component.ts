import { SeekProgressBarService } from './progress-bar.service';
import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'seek-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SeekProgressBarComponent implements OnInit, OnDestroy {
  bufferValue: number;
  mode: 'determinate' | 'indeterminate' | 'buffer' | 'query';
  value: number;
  visible: boolean;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {SeekProgressBarService} _seekProgressBarService
   */
  constructor(private _seekProgressBarService: SeekProgressBarService) {
    // Set the defaults

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
    // Subscribe to the progress bar service properties

    // Buffer value
    this._seekProgressBarService.bufferValue
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((bufferValue) => {
        this.bufferValue = bufferValue;
      });

    // Mode
    this._seekProgressBarService.mode
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((mode) => {
        this.mode = mode;
      });

    // Value
    this._seekProgressBarService.value
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((value) => {
        this.value = value;
      });

    // Visible
    this._seekProgressBarService.visible
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((visible) => {
        this.visible = visible;
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
}
