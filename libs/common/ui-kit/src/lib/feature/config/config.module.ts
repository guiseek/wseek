import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';

import { SEEK_CONFIG } from './config.service';

@NgModule()
export class SeekConfigModule {
  constructor(@Optional() @SkipSelf() parentModule: SeekConfigModule) {
    if (parentModule) {
      throw new Error(
        'SeekConfigModule is already loaded. Import it in the AppModule only!'
      );
    }
  }

  static forRoot(config): ModuleWithProviders<SeekConfigModule> {
    return {
      ngModule: SeekConfigModule,
      providers: [
        {
          provide: SEEK_CONFIG,
          useValue: config,
        },
      ],
    };
  }
}
