import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'seek-logo',
  templateUrl: './seek-logo.component.html',
  styleUrls: ['./seek-logo.component.scss'],
})
export class SeekLogoComponent {
  @HostBinding('style.width') get width() {
    return this.size;
  }
  @HostBinding('style.height') get height() {
    return this.size;
  }

  @Input() size = 'inherit';
}
