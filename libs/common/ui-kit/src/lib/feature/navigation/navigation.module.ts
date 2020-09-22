import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

import { SeekNavigationComponent } from './navigation.component';
import { SeekNavVerticalItemComponent } from './vertical/item/item.component';
import { SeekNavVerticalCollapsableComponent } from './vertical/collapsable/collapsable.component';
import { SeekNavVerticalGroupComponent } from './vertical/group/group.component';
import { SeekNavHorizontalItemComponent } from './horizontal/item/item.component';
import { SeekNavHorizontalCollapsableComponent } from './horizontal/collapsable/collapsable.component';

@NgModule({
  imports: [CommonModule, RouterModule, MatIconModule, MatRippleModule],
  exports: [SeekNavigationComponent],
  declarations: [
    SeekNavigationComponent,
    SeekNavVerticalGroupComponent,
    SeekNavVerticalItemComponent,
    SeekNavVerticalCollapsableComponent,
    SeekNavHorizontalItemComponent,
    SeekNavHorizontalCollapsableComponent,
  ],
})
export class SeekNavigationModule {}
