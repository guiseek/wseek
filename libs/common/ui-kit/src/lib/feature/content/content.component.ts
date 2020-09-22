import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'seek-content',
  template: '<router-outlet *ngIf="true"></router-outlet>',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./content.component.scss'],
})
export class SeekContentComponent {}
