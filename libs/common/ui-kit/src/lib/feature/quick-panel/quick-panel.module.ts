import { NgModule } from '@angular/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { CommonUiKitModule } from '../../common-ui-kit.module';

import { SeekQuickPanelComponent } from './quick-panel.component';

@NgModule({
  declarations: [SeekQuickPanelComponent],
  imports: [
    MatDividerModule,
    MatListModule,
    MatSlideToggleModule,

    CommonUiKitModule,
  ],
  exports: [SeekQuickPanelComponent],
})
export class SeekQuickPanelModule {}
