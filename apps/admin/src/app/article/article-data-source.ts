import { ArticleFacade } from './article.facade';
import { map } from 'rxjs/operators';
import { Article } from './article';
import { DataSource } from '@angular/cdk/table';
import { DataUtils } from '@wseek/global/util-mapper';
import { BehaviorSubject, Observable, merge } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export class ArticleDataSource extends DataSource<Article> {
  private _filterChange = new BehaviorSubject('');
  private _filteredDataChange = new BehaviorSubject('');

  /**
   * Creates an instance of ArticleDataSource.
   * @param {ArticleFacade} _articleFacade
   * @param {MatPaginator} _matPaginator
   * @param {MatSort} _matSort
   * @memberof ArticleDataSource
   */
  constructor(
    private _articleFacade: ArticleFacade,
    private _matPaginator: MatPaginator,
    private _matSort: MatSort
  ) {
    super();

    this.filteredData = this._articleFacade.articleList.value;
  }

  /**
   * Connect function called by the table to retrieve
   * one stream containing the data to render.
   *
   * @returns {Observable<any[]>}
   */
  connect(): Observable<any[]> {
    const displayDataChanges = [
      this._articleFacade.articleList$,
      this._matPaginator.page,
      this._filterChange,
      this._matSort.sortChange,
    ];

    return merge(...displayDataChanges).pipe(
      map(() => {
        let data = this._articleFacade.articleList.value.slice();

        data = this.filterData(data);

        this.filteredData = [...data];

        data = this.sortData(data);

        // Grab the page's slice of data.
        const startIndex =
          this._matPaginator.pageIndex * this._matPaginator.pageSize;
        return data.splice(startIndex, this._matPaginator.pageSize);
      })
    );
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------

  get filteredData(): any {
    return this._filteredDataChange.value;
  }

  set filteredData(value: any) {
    this._filteredDataChange.next(value);
  }

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  filterData(data): any {
    if (!this.filter) {
      return data;
    }
    return DataUtils.filterArrayByString(data, this.filter);
  }

  sortData(data): any[] {
    if (!this._matSort.active || this._matSort.direction === '') {
      return data;
    }

    return data.sort((a: Article, b: Article) => {
      let propertyA: number | string | Date = '';
      let propertyB: number | string | Date = '';

      switch (this._matSort.active) {
        case 'id':
          [propertyA, propertyB] = [a.id, b.id];
          break;
        case 'name':
          [propertyA, propertyB] = [a.title, b.title];
          break;
        case 'headline':
          [propertyA, propertyB] = [a.headline, b.headline];
          break;
        case 'datePublished':
          [propertyA, propertyB] = [a.datePublished, b.datePublished];
          break;
        case 'dateModified':
          [propertyA, propertyB] = [a.dateModified, b.dateModified];
          break;
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (
        (valueA < valueB ? -1 : 1) *
        (this._matSort.direction === 'asc' ? 1 : -1)
      );
    });
  }

  disconnect(): void {}
}
