import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class ArticleService implements Resolve<any> {
  onArticleChanged: BehaviorSubject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} http
   */
  constructor(private http: HttpClient) {
    // Set the defaults
    this.onArticleChanged = new BehaviorSubject({});
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Resolver
   *
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return new Promise((resolve, reject) => {
      Promise.all([
        this.getArticle(route.params.articleId, route.params.articleSlug),
      ]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get article
   *
   * @param articleId
   * @param articleSlug
   * @returns {Promise<any>}
   */
  getArticle(articleId, articleSlug): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http
        .get('api/academy-article/' + articleId + '/' + articleSlug)
        .subscribe((response: any) => {
          this.onArticleChanged.next(response);
          resolve(response);
        }, reject);
    });
  }
}
