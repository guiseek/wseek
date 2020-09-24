import { takeUntil, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { ArticleDataSource } from './../article-data-source';
import { ArticleFacade } from './../article.facade';
import {
  Component,
  OnInit,
  ViewChild,
  ViewEncapsulation,
  ElementRef,
} from '@angular/core';
import { Article } from '../article';
import { seekAnimations } from '@wseek/ui-kit';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { fromEvent, Subject } from 'rxjs';

@Component({
  selector: 'wseek-article',
  templateUrl: 'article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: seekAnimations,
})
export class ArticleListComponent implements OnInit {
  dataSource: ArticleDataSource | null;
  // dataSource: MatTableDataSource<Article>;
  displayedColumns: (keyof Article)[] = [
    'id',
    'headline',
    'image',
    'tags',
    'datePublished'
  ];

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort: MatSort;

  @ViewChild('filter', { static: true })
  filter: ElementRef;

  // Private
  private _subject: Subject<any>;

  // filter = new ArticleFilter();
  selectedArticle: Article;
  feedback: any = {};

  articleList$ = this._articleService.articleList$;

  // get articleList() {
  //   return this._articleService.articleList$;
  // }

  constructor(private _articleService: ArticleFacade) {
    this._subject = new Subject();
  }

  ngOnInit() {
    // this._articleService.
    this.dataSource = new ArticleDataSource(
      this._articleService,
      this.paginator,
      this.sort
    );
    fromEvent(this.filter.nativeElement, 'keyup')
      .pipe(takeUntil(this._subject), debounceTime(150), distinctUntilChanged())
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }

        this.dataSource.filter = this.filter.nativeElement.value;
      });
    // this.search();
  }

  search(): void {
    this._articleService.load(this.filter);
  }

  select(selected: Article): void {
    this.selectedArticle = selected;
  }

  delete(article: Article): void {
    if (confirm('Are you sure?')) {
      this._articleService.delete(article).subscribe(
        () => {
          this.feedback = {
            type: 'success',
            message: 'Delete was successful!',
          };
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        (err) => {
          this.feedback = { type: 'warning', message: 'Error deleting.' };
        }
      );
    }
  }
}
