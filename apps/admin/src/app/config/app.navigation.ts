import { SeekNavigation } from '@wseek/ui-kit';

export const APP_NAVIGATION: SeekNavigation[] = [
  {
    id: 'applications',
    title: 'Apps',
    translate: 'NAV.APPLICATIONS',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'articles',
        title: 'Artigos',
        translate: 'NAV.ARTICLES',
        type: 'item',
        icon: 'article',
        url: '/articles',
      },
      {
        id: 'users',
        title: 'Usuários',
        translate: 'NAV.USERS',
        type: 'item',
        icon: 'people',
        url: '/users',
      },
    ],
  },
];
