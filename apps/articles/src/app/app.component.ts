import { SeekSplashScreenService } from '@wseek/ui-kit';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'wseek-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private _splash: SeekSplashScreenService
  ) {}
  ngOnInit(): void {
    this._splash.onInit();
  }
}
