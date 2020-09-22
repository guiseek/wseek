import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'seek-nav-horizontal-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class SeekNavHorizontalItemComponent {
  @HostBinding('class')
  classes = 'nav-item';

  @Input()
  item: any;

  /**
   * Constructor
   */
  constructor() {}
}
