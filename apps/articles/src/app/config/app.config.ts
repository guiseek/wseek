import { SeekConfig } from '@swseek/ui-kit';

export const appConfig: SeekConfig = {
  // logo: 'assets/images/logos/team.svg',
  // Color themes can be defined in src/app/app.theme.scss
  colorTheme: 'theme-default',
  customScrollbars: true,
  layout: {
    navbar: {
      // logo: 'assets/images/logos/team-xs.svg',
      primaryBackground: 'seek-blue-500',
      secondaryBackground: 'seek-blue-900',
      hidden: false,
      position: 'left',
      variant: 'vertical-style-1',
    },
    toolbar: {
      background: 'seek-blue-500',
      hidden: false,
    },
    footer: {
      background: 'seek-blue-900',
      hidden: false,
    },
    sidepanel: {
      hidden: false,
      position: 'right',
    },
  },
};
