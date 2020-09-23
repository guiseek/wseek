import { navigation } from './config/app.navigation';
import { AppLocale } from './config/app.locale';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  CommonUiKitModule,
  SeekConfigModule,
  SeekContentModule,
  SeekFooterModule,
  SeekNavbarModule,
  SeekNavigationModule,
  SeekProgressBarModule,
  SeekQuickPanelModule,
  SeekSearchBarModule,
  SeekSidebarModule,
  SeekSplashScreenModule,
  SeekToolbarModule,
} from '@wseek/ui-kit';
import { SeekChatPanelModule } from '@wseek/chat-panel';
import { CommonUtilMockModule } from '@wseek/common/util-mock';

import { appConfig } from './config/app.config';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ShellComponent } from './shell/shell.component';

export const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: 'academy' },
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'academy' },
      {
        path: 'academy',
        loadChildren: () =>
          import('./feature/academy/academy.module').then((m) => m.AcademyModule),
      },
    ]
  },
];

@NgModule({
  declarations: [AppComponent, ShellComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),

    SeekContentModule,
    SeekSidebarModule,
    SeekQuickPanelModule,
    SeekFooterModule,
    SeekNavbarModule,
    SeekToolbarModule,
    SeekSearchBarModule,
    SeekProgressBarModule,
    SeekSplashScreenModule,
    SeekNavigationModule,
    SeekChatPanelModule,
    SeekConfigModule.forRoot(appConfig),

    CommonUiKitModule,
    CommonUtilMockModule,
  ],
  providers: [AppLocale.forRoot(), { provide: 'nav', useValue: navigation }],
  bootstrap: [AppComponent],
})
export class AppModule {}
