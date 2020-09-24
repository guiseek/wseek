import { Component, OnInit } from '@angular/core';
import { ArticleFilter } from '../article-filter';
import { ArticleService } from '../article.service';
import { Article } from '../article';

@Component({
  selector: 'wseek-article',
  templateUrl: 'article-list.component.html'
})
export class ArticleListComponent implements OnInit {

  filter = new ArticleFilter();
  selectedArticle: Article;
  feedback: any = {};

  get articleList(): Article[] {
    return this.articleService.articleList;
  }

  constructor(private articleService: ArticleService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    this.articleService.load(this.filter);
  }

  select(selected: Article): void {
    this.selectedArticle = selected;
  }

  delete(article: Article): void {
    if (confirm('Are you sure?')) {
      this.articleService.delete(article).subscribe(() => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      );
    }
  }
}
