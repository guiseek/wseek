import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  QueryList,
  ViewChildren,
  ViewEncapsulation,
} from '@angular/core';
import { ArticleService } from '../../services/article.service';
import {
  seekAnimations,
  SeekPerfectScrollbarDirective,
  SeekSidebarService,
} from '@wseek/ui-kit';
// ArticleService

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'wseek-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: seekAnimations,
})
export class ArticleComponent implements OnInit, OnDestroy, AfterViewInit {
  animationDirection: 'left' | 'right' | 'none';
  article: any;
  articleStepContent: any;
  currentStep: number;

  @ViewChildren(SeekPerfectScrollbarDirective)
  seekScrollbarDirectives: QueryList<SeekPerfectScrollbarDirective>;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {ArticleService} _academyArticleService
   * @param {ChangeDetectorRef} _changeDetectorRef
   * @param {SeekSidebarService} _swSeekSidebarService
   */
  constructor(
    private _academyArticleService: ArticleService,
    private _changeDetectorRef: ChangeDetectorRef,
    private _swSeekSidebarService: SeekSidebarService
  ) {
    // Set the defaults
    this.animationDirection = 'none';
    this.currentStep = 0;

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
    // Subscribe to articles
    this._academyArticleService.onArticleChanged
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((article) => {
        this.article = article;
      });
  }

  /**
   * After view init
   */
  ngAfterViewInit(): void {
    this.articleStepContent = this.seekScrollbarDirectives.find(
      (seekScrollbarDirective) => {
        return (
          seekScrollbarDirective.elementRef.nativeElement.id ===
          'article-step-content'
        );
      }
    );
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
   * Go to step
   *
   * @param step
   */
  gotoStep(step): void {
    // Decide the animation direction
    this.animationDirection = this.currentStep < step ? 'left' : 'right';

    // Run change detection so the change
    // in the animation direction registered
    this._changeDetectorRef.detectChanges();

    // Set the current step
    this.currentStep = step;
  }

  /**
   * Go to next step
   */
  gotoNextStep(): void {
    if (this.currentStep === this.article.totalSteps - 1) {
      return;
    }

    // Set the animation direction
    this.animationDirection = 'left';

    // Run change detection so the change
    // in the animation direction registered
    this._changeDetectorRef.detectChanges();

    // Increase the current step
    this.currentStep++;
  }

  /**
   * Go to previous step
   */
  gotoPreviousStep(): void {
    if (this.currentStep === 0) {
      return;
    }

    // Set the animation direction
    this.animationDirection = 'right';

    // Run change detection so the change
    // in the animation direction registered
    this._changeDetectorRef.detectChanges();

    // Decrease the current step
    this.currentStep--;
  }

  /**
   * Toggle the sidebar
   *
   * @param name
   */
  toggleSidebar(name): void {
    this._swSeekSidebarService.getSidebar(name).toggleOpen();
  }
}
