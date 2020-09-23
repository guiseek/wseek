import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SeekSearchBarComponent } from './search-bar.component';

@NgModule({
  declarations: [SeekSearchBarComponent],
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  exports: [SeekSearchBarComponent],
})
export class SeekSearchBarModule {}
