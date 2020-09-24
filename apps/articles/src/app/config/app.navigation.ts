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
        id: 'calendar',
        title: 'Calendário',
        translate: 'NAV.CALENDAR',
        type: 'item',
        icon: 'today',
        url: '/apps/calendar',
      },
      {
        id: 'academy',
        title: 'Educacional',
        translate: 'NAV.ACADEMY',
        type: 'item',
        icon: 'school',
        url: '/academy',
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
