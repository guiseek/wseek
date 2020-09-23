import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'seek-quick-panel',
  templateUrl: './quick-panel.component.html',
  styleUrls: ['./quick-panel.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SeekQuickPanelComponent implements OnInit, OnDestroy {
  date: Date;
  events: any[];
  notes: any[];
  settings: any;

  // Private
  private _destroy$: Subject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} _httpClient
   */
  constructor(private _httpClient: HttpClient) {
    // Set the defaults
    this.date = new Date();
    this.settings = {
      notify: true,
      cloud: false,
      retro: true,
    };

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
    // Subscribe to the events
    this._httpClient
      .get('api/quick-panel-events')
      .pipe(takeUntil(this._destroy$))
      .subscribe((response: any) => {
        this.events = response;
      });

    // Subscribe to the notes
    this._httpClient
      .get('api/quick-panel-notes')
      .pipe(takeUntil(this._destroy$))
      .subscribe((response: any) => {
        this.notes = response;
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
}
