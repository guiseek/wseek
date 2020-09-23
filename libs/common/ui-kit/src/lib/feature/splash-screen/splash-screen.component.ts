import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'seek-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeekSplashScreenComponent {
  @Input() src = '/imgs/logos/seek.svg';
}
