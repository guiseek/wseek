import { NgModule } from '@angular/core';
import { SeekIfOnDomDirective } from './seek-if-on-dom.directive';
import { SeekInnerScrollDirective } from './seek-inner-scroll.directive';
import { SeekPerfectScrollbarDirective } from './seek-perfect-scrollbar.directive';
import {
  SeekMatSidenavHelperDirective,
  SeekMatSidenavTogglerDirective,
} from './seek-mat-sidenav.directive';

@NgModule({
  declarations: [
    SeekIfOnDomDirective,
    SeekInnerScrollDirective,
    SeekMatSidenavHelperDirective,
    SeekMatSidenavTogglerDirective,
    SeekPerfectScrollbarDirective,
  ],
  imports: [],
  exports: [
    SeekIfOnDomDirective,
    SeekInnerScrollDirective,
    SeekMatSidenavHelperDirective,
    SeekMatSidenavTogglerDirective,
    SeekPerfectScrollbarDirective,
  ],
})
export class SeekDirectivesModule {}
