import { swSeekAnimations } from './../animations/index';
import { ArticlesService } from './../services/articles.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
// import { ArticlesFacade, ArticlesService } from '@seekboard/academy/domain';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'swseek-academy',
  templateUrl: './academy.component.html',
  styleUrls: ['./academy.component.scss'],
  animations: swSeekAnimations
})
export class AcademyComponent implements OnInit, OnDestroy {
  categories: any[];
  courses: any[];
  coursesFilteredByCategory: any[];
  filteredArticles: any[];
  currentCategory: string;
  searchTerm: string;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {ArticlesService} _academyArticlesService
   */
  constructor(private _academyArticlesService: ArticlesService) {
    // Set the defaults
    this.currentCategory = 'all';
    this.searchTerm = '';

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to categories
    this._academyArticlesService.onCategoriesChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((categories) => {
        console.log(categories);

        this.categories = categories;
      });

    // Subscribe to courses
    this._academyArticlesService.onArticlesChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((courses) => {
        this.filteredArticles = this.coursesFilteredByCategory = this.courses = courses;
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------

  /**
   * Filter courses by category
   */
  filterArticlesByCategory(): void {
    // Filter
    if (this.currentCategory === 'all') {
      this.coursesFilteredByCategory = this.courses;
      this.filteredArticles = this.courses;
    } else {
      this.coursesFilteredByCategory = this.courses.filter((course) => {
        return course.category === this.currentCategory;
      });

      this.filteredArticles = [...this.coursesFilteredByCategory];
    }

    // Re-filter by search term
    this.filterArticlesByTerm();
  }

  /**
   * Filter courses by term
   */
  filterArticlesByTerm(): void {
    const searchTerm = this.searchTerm.toLowerCase();

    // Search
    if (searchTerm === '') {
      this.filteredArticles = this.coursesFilteredByCategory;
    } else {
      this.filteredArticles = this.coursesFilteredByCategory.filter((course) => {
        return course.title.toLowerCase().includes(searchTerm);
      });
    }
  }
}
