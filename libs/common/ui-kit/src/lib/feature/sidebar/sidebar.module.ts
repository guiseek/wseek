import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeekSidebarComponent } from './sidebar.component';



@NgModule({
  declarations: [SeekSidebarComponent],
  exports: [SeekSidebarComponent],
  imports: [
    CommonModule
  ]
})
export class SeekSidebarModule { }
