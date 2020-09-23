import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

import { CommonUiKitModule } from '../../common-ui-kit.module';

import { SeekFooterContainerComponent } from './footer-container.component';
import { SeekFooterComponent } from './footer.component';

@NgModule({
  declarations: [SeekFooterComponent, SeekFooterContainerComponent],
  imports: [
    RouterModule,

    PortalModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,

    CommonUiKitModule,
  ],
  exports: [SeekFooterComponent, SeekFooterContainerComponent],
})
export class SeekFooterModule {}
