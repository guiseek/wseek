import { Article } from './article';
import { ArticleFilter } from './article-filter';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

const headers = new HttpHeaders().set('Accept', 'application/json');

@Injectable()
export class ArticleService {
  articleList: Article[] = [];
  api = '/api/article';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Article> {
    const url = `${this.api}/${id}`;
    const params = { id: id };
    return this.http.get<Article>(url, {params, headers});
  }

  load(filter: ArticleFilter): void {
    this.find(filter).subscribe(result => {
        this.articleList = result;
      },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: ArticleFilter): Observable<Article[]> {
    const params = {
    };

    return this.http.get<Article[]>(this.api, {params, headers});
  }

  save(entity: Article): Observable<Article> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.put<Article>(url, entity, {headers, params});
    } else {
      url = `${this.api}`;
      return this.http.post<Article>(url, entity, {headers, params});
    }
  }

  delete(entity: Article): Observable<Article> {
    let params = new HttpParams();
    let url = '';
    if (entity.id) {
      url = `${this.api}/${entity.id.toString()}`;
      params = new HttpParams().set('ID', entity.id.toString());
      return this.http.delete<Article>(url, {headers, params});
    }
    return null;
  }
}

