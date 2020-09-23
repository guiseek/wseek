import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Article } from '../article';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html'
})
export class ArticleEditComponent implements OnInit {

  id: string;
  article: Article;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticleService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Article()); }
          return this.articleService.findById(id);
        })
      )
      .subscribe(article => {
          this.article = article;
          this.feedback = {};
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error loading'};
        }
      );
  }

  save() {
    this.articleService.save(this.article).subscribe(
      article => {
        this.article = article;
        this.feedback = {type: 'success', message: 'Save was successful!'};
        setTimeout(() => {
          this.router.navigate(['/articles']);
        }, 1000);
      },
      err => {
        this.feedback = {type: 'warning', message: 'Error saving'};
      }
    );
  }

  cancel() {
    this.router.navigate(['/articles']);
  }
}
