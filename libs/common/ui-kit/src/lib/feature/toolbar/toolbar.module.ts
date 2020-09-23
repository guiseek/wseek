import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

// import { SeekShortcutsModule } from './../shortcuts/shortcuts.module';
import { SeekSearchBarModule } from './../search-bar/search-bar.module';

import { SeekToolbarComponent } from './toolbar.component';
import { CommonUiKitModule } from '../../common-ui-kit.module';

@NgModule({
  declarations: [SeekToolbarComponent],
  imports: [
    RouterModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,

    CommonUiKitModule,
    SeekSearchBarModule
    // SeekShortcutsModule,
  ],
  exports: [SeekToolbarComponent],
})
export class SeekToolbarModule {}
