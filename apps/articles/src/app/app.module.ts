import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  CommonUiKitModule,
  SeekConfigModule,
  SeekContentModule,
  SeekProgressBarModule,
  SeekSplashScreenModule,
} from '@swseek/ui-kit';
import { CommonUtilMockModule } from '@swseek/common/util-mock';

import { appConfig } from './config/app.config';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'academy' },
  {
    path: 'academy',
    loadChildren: () =>
      import('./feature/academy/academy.module').then((m) => m.AcademyModule),
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),

    SeekContentModule,
    SeekProgressBarModule,
    SeekSplashScreenModule,
    SeekConfigModule.forRoot(appConfig),

    CommonUiKitModule,
    CommonUtilMockModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
