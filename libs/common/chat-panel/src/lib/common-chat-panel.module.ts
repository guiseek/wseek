import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';

import { CommonUiKitModule } from '@wseek/ui-kit';

import { ChatPanelComponent } from './chat-panel.component';
import { ChatPanelService } from './chat-panel.service';

export * from './chat-panel.component';
export * from './chat-panel.service';
export * from './seek-utils';

@NgModule({
  declarations: [ChatPanelComponent],
  providers: [ChatPanelService],
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTabsModule,
    MatTooltipModule,
    MatRippleModule,

    CommonUiKitModule,
  ],
  exports: [ChatPanelComponent],
})
export class SeekChatPanelModule {}

// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

// @NgModule({
//   imports: [CommonModule],
// })
// export class CommonChatPanelModule {}
