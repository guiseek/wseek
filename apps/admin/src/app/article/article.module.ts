import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleService } from './article.service';
import { ARTICLE_ROUTES } from './article.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ARTICLE_ROUTES)
  ],
  declarations: [
    ArticleListComponent,
    ArticleEditComponent
  ],
  providers: [ArticleService],
  exports: []
})
export class ArticleModule { }
