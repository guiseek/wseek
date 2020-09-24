import { Injectable } from '@angular/core';
import { ArticleFilter } from './article-filter';
import { ArticleService } from './article.service';
import { Article } from './article';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class ArticleFacade {
  public articleList = new BehaviorSubject<Article[]>([]);
  public articleList$ = this.articleList.asObservable();

  constructor(private article: ArticleService) {
  }

  load(filter: ArticleFilter): void {
    this.article.find(filter).subscribe(result => {
        this.articleList.next(result);
      },
      err => {
        console.error('error loading', err);
      }
    );
  }
  save(entity: Article) {
    return this.article.save(entity);
  }
  delete(entity: Article) {
    return this.article.delete(entity);
  }
}
