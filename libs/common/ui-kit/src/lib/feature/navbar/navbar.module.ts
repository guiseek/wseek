import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { SeekNavigationModule } from './../navigation/navigation.module';
import { SeekDirectivesModule } from './../directives/directives.modules';
import { SeekNavbarVerticalComponent } from './navbar-vertical/navbar-vertical.component';
import { SeekNavbarHorizontalComponent } from './navbar-horizontal/navbar-horizontal.component';

import { CommonUiKitModule } from '../../common-ui-kit.module';

import { NavbarComponent } from './navbar.component';

@NgModule({
  declarations: [
    SeekNavbarVerticalComponent,
    SeekNavbarHorizontalComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    SeekDirectivesModule,
    SeekNavigationModule,
    CommonUiKitModule,
  ],
  exports: [
    SeekNavbarVerticalComponent,
    SeekNavbarHorizontalComponent,
    NavbarComponent,
  ],
})
export class SeekNavbarModule {}
