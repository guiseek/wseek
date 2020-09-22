import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeekContentComponent } from './content.component';

@NgModule({
  declarations: [SeekContentComponent],
  imports: [CommonModule, RouterModule],
  exports: [SeekContentComponent],
})
export class SeekContentModule {}
