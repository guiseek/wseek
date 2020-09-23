import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ArticleModule } from './article/article.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'articles'
      },
      // {
      //   path: '',
      //   loadChildren: () => import('./article/article.module').then((m) => m.ArticleModule)
      // }
    ], { initialNavigation: 'enabled' }),
    ArticleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
