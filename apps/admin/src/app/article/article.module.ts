import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleService } from './article.service';
import { ArticleFacade } from './article.facade';
import { ARTICLE_ROUTES } from './article.routes';
import { CommonUiKitModule, CustomMaterialModule } from '@wseek/ui-kit';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatSortModule,
    MatTableModule,
    MatPaginatorModule,
    CommonUiKitModule,
    CustomMaterialModule,
    RouterModule.forChild(ARTICLE_ROUTES),
  ],
  declarations: [ArticleListComponent, ArticleEditComponent],
  providers: [ArticleService, ArticleFacade],
  exports: [],
})
export class ArticleModule {}
