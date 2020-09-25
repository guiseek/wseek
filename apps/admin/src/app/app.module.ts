import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { APP_NAVIGATION } from './config/app.navigation';
import { APP_CONFIG } from './config/app.config';
import { AppLocale } from './config/app.locale';

import {
  CommonUiKitModule,
  SeekConfigModule,
  SeekContentModule,
  SeekNavbarModule,
  SeekNavigationModule,
  SeekProgressBarModule,
  SeekQuickPanelModule,
  SeekSearchBarModule,
  SeekSidebarModule,
  SeekSplashScreenModule,
  SeekToolbarModule,
} from '@wseek/ui-kit';
import { CommonUtilMockModule } from '@wseek/common/util-mock';
import { SeekChatPanelModule } from '@wseek/chat-panel';

import { AppComponent } from './app.component';
import { AppShellComponent } from './app-shell/app-shell.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'articles',
      },
      {
        path: '',
        loadChildren: () =>
          import('./article/article.module').then((m) => m.ArticleModule),
      },
    ],
  },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
];

@NgModule({
  declarations: [AppComponent, AppShellComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,

    SeekContentModule,
    SeekSidebarModule,
    SeekNavbarModule,
    SeekToolbarModule,
    SeekSearchBarModule,
    SeekQuickPanelModule,
    SeekProgressBarModule,
    SeekSplashScreenModule,
    SeekNavigationModule,
    SeekChatPanelModule,

    SeekConfigModule.forRoot(APP_CONFIG),
    RouterModule.forRoot(APP_ROUTES),
    CommonUiKitModule,
    CommonUtilMockModule,
  ],
  providers: [
    AppLocale.forRoot(),
    { provide: 'nav', useValue: APP_NAVIGATION },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
