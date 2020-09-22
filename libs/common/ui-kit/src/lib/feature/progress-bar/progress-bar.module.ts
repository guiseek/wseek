import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { SeekProgressBarComponent } from './progress-bar.component';

@NgModule({
  declarations: [SeekProgressBarComponent],
  imports: [
    CommonModule,
    RouterModule,

    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
  ],
  exports: [SeekProgressBarComponent],
})
export class SeekProgressBarModule {}
