import { SeekConfig } from '@wseek/ui-kit';

export const APP_CONFIG: SeekConfig = {
  logo: 'imgs/logos/seek.svg',
  colorTheme: 'theme-default',
  customScrollbars: true,
  layout: {
    style: 'vertical-layout-1',
    width: 'fullwidth',
    navbar: {
      primaryBackground: 'seek-navy-700',
      secondaryBackground: 'seek-navy-900',
      folded: false,
      hidden: false,
      position: 'left',
      variant: 'vertical-style-1',
    },
    toolbar: {
      customBackgroundColor: true,
      background: 'mat-accent',
      hidden: false,
      position: 'below-static',
    },
    footer: {
      customBackgroundColor: true,
      background: 'seek-navy-900',
      hidden: false,
      position: 'below-fixed',
    },
    sidepanel: {
      hidden: false,
      position: 'right',
    },
  },
};
