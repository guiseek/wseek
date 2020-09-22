import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ArticlesService implements Resolve<any> {
  onCategoriesChanged: BehaviorSubject<any>;
  onArticlesChanged: BehaviorSubject<any>;

  /**
   * Constructor
   *
   * @param {HttpClient} http
   */
  constructor(private http: HttpClient) {
    // Set the defaults
    this.onCategoriesChanged = new BehaviorSubject({});
    this.onArticlesChanged = new BehaviorSubject({});
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
      Promise.all([this.getCategories(), this.getArticles()]).then(() => {
        resolve();
      }, reject);
    });
  }

  /**
   * Get categories
   *
   * @returns {Promise<any>}
   */
  getCategories(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('api/academy-categories').subscribe((response: any) => {
        this.onCategoriesChanged.next(response);
        resolve(response);
      }, reject);
    });
  }

  /**
   * Get articles
   *
   * @returns {Promise<any>}
   */
  getArticles(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('api/academy-articles').subscribe((response: any) => {
        this.onArticlesChanged.next(response);
        resolve(response);
      }, reject);
    });
  }
}
