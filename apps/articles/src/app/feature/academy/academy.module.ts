import { ContentComponent } from './content/content.component';
import { ArticleService } from './../services/article.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AcademyComponent } from './academy.component';
import {
  CommonUiKitModule,
  CustomMaterialModule,
  SeekLogoModule,
  SeekSidebarModule,
} from '@wseek/ui-kit';
import { ArticlesService } from '../services/articles.service';
import { ArticleComponent } from './article/article.component';

const routes: Routes = [
  {
    path: 'articles',
    component: AcademyComponent,
    resolve: {
      academy: ArticlesService,
    },
  },
  {
    path: 'articles/:articleId/:articleSlug',
    component: ArticleComponent,
    resolve: {
      academy: ArticleService,
    },
  },
  {
    path: '**',
    redirectTo: 'articles',
  },
];

@NgModule({
  declarations: [AcademyComponent, ArticleComponent, ContentComponent],
  imports: [
    CommonModule,
    SeekLogoModule,
    SeekSidebarModule,
    CommonUiKitModule,
    CustomMaterialModule,
    RouterModule.forChild(routes),
  ],
  providers: [ArticlesService, ArticleService],
})
export class AcademyModule {}
