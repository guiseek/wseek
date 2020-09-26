import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';

export const ARTICLE_ROUTES: Routes = [
  {
    path: '',
    component: ArticleListComponent
  },
  {
    path: ':id',
    component: ArticleEditComponent
  }
];
