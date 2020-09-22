export interface SeekConfig {
  logo?: string;
  colorTheme: string;
  customScrollbars: boolean;
  layout: {
    navbar: {
      logo?: string;
      primaryBackground: string;
      secondaryBackground: string;
      hidden: boolean;
      position: 'left' | 'right' | 'top';
      variant: string;
    };
    toolbar: {
      background: string;
      hidden: boolean;
    };
    footer: {
      background: string;
      hidden: boolean;
    };
    sidepanel: {
      hidden: boolean;
      position: 'left' | 'right';
    };
  };
}
