import { SeekNavigation } from '@wseek/ui-kit';

export const navigation: SeekNavigation[] = [
  {
    id: 'applications',
    title: 'Apps',
    translate: 'NAV.APPLICATIONS',
    type: 'group',
    icon: 'apps',
    children: [
      {
        id: 'academy',
        title: 'Educacional',
        translate: 'NAV.ACADEMY',
        type: 'item',
        icon: 'school',
        url: '/academy',
      },
      {
        id: 'blog',
        title: 'Blog',
        translate: 'NAV.BLOG',
        type: 'item',
        icon: 'toc',
        url: '/blog',
      },
      {
        id: 'chat',
        title: 'Chat',
        translate: 'NAV.CHAT',
        type: 'item',
        icon: 'chat',
        url: '/apps/chat',
        badge: {
          title: '13',
          bg: '#f9f9f9',
          fg: '#0846b6',
        },
      },
      {
        id: 'contacts',
        title: 'Contatos',
        translate: 'NAV.CONTACTS',
        type: 'item',
        icon: 'account_box',
        url: '/apps/contacts',
      },
    ],
  },
];
